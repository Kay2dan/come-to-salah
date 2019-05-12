import React, { Component } from "react";
import SEO from "../components/seo";
import { Button, Column, Columns, Section, Title } from "bloomer";
import SalahTimes from "../components/SalahTimes";
import "../styles/localSalahTime.sass";
import DropDownContainer from "../components/Dropdown";

const methodData = [
  "University of Islamic Sciences, Karachi",
  "Islamic Society of North America",
  "Muslim World League",
  "Shia Ithna-Ansari",
  "Umm Al-Qura University, Makkah",
  "Egyptian General Authority of Survey",
  "Institute of Geophysics, University of Tehran",
  "Gulf Region",
  "Kuwait",
  "Qatar",
  "Majlis Ugama Islam Singapura, Singapore",
  "Union Organization islamic de France",
  "Diyanet İşleri Başkanlığı, Turkey",
  "Spiritual Administration of Muslims of Russia",
];

const schoolData = ["Hanafi", "Shafi"];

class LocalSalahTimePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      userLocation: {
        lattitude: "",
        longitude: "",
      },
      year: new Date().getYear(),
      error: "", // for error handling
      method: {
        toggleMenu: false,
        selected: "",
      },
      school: {
        toggleMenu: false,
        selected: "",
      },
    };
  }

  //https://stackoverflow.com/questions/6159074/given-the-lat-long-coordinates-how-can-we-find-out-the-city-country
  getUserLocation = () => {
    const { localStorage } = window;
    let userLocation = JSON.parse(localStorage.getItem("userCoOrdForSalah"));
    return (
      userLocation ||
      window.navigator.geolocation.getCurrentPosition(
        coord => {
          window.localStorage.setItem("userCoordForSalah", coord.coords);
          this.setState({
            userLocation: coord.coords,
          });
        },
        err => {
          const { code, msg } = err;
          if (code === 1) {
            prompt(
              "Location is needed to get the local salah time, please try again.",
              msg
            );
          } else if (code === 2 || code === 3) {
            prompt(
              "Sorry, something went wrong, please try again or try again later.",
              msg
            );
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      )
    );
  };

  //      https://aladhan.com/prayer-times-api
  //      See the above link for documentation for the
  //      api we are using to get the salah times
  fetchSalahTimes = async () => {
    const {
      userlocation: { lattitude, longitude },
      method,
      month,
      year,
    } = this.state;
    if (!lattitude) {
      const result = await this.getUserLocation();
      console.log("userLocation: ", result);
      //TODO: add the school in the below request
      const url = `http://api.aladhan.com/v1/calendar?latitude=${lattitude}&longitude=${longitude}&method=${method}&month=${month}&year=${year}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log("resp from json data: ", data);
      // 1 - store the relevant data into state
      // 2 - add error handling
    }
  };

  toggleMenu = type => () =>
    this.setState({
      [type]: {
        selected: this.state[type].selected,
        toggleMenu: !this.state[type].toggleMenu,
      },
    });

  onClickHandler = type => e => {
    const newState = { ...this.state[type] };
    newState.selected = e.target.innerText;
    newState.toggleMenu = !newState.toggleMenu;
    this.setState({
      [type]: { ...newState },
    });
  };

  render() {
    const { userLocation, method, school } = this.state;
    return (
      <div id="localSalahTimeWrapper">
        <SEO
          title="Local Salah Time"
          keywords={[`salah`, `salaat`, `salat`, `prayer`]}
        />
        <Title isSize="2">Local Salah Time</Title>
        <Section>
          <Columns
            className="is-vcentered"
            style={{ flexDirection: "row-reverse" }}
          >
            <Column isSize="1/2" className="has-text-centered">
              <div className="has-text-centered dateSection level">
                <div className="level-left">gregorianDate</div>
                <div className="level-right">Hijri Date</div>
              </div>
              <div
                className="level userLocation"
                // onClick={this.getUserLocation}
                onClick={this.fetchSalahTimes}
              >
                {/* <Icon isSize="" className="level-item" /> */}
                <div className="level-item">{`Your location: ${userLocation}`}</div>
              </div>
              <div className="level">
                <Title isSize="6" className="level-item is-hidden-mobile">
                  Method:
                </Title>
                <DropDownContainer
                  className="level-item"
                  data={methodData}
                  btnTxt="method"
                  stateProps={method}
                  onClickHandlerForDropDown={this.toggleMenu("method")}
                  onClickHandlerForDropDownItem={this.onClickHandler("method")}
                />
              </div>
              <div className="level">
                <Title isSize="6" className="level-item is-hidden-mobile">
                  School:
                </Title>
                <DropDownContainer
                  className="level-item"
                  data={schoolData}
                  btnTxt="school"
                  stateProps={school}
                  onClickHandlerForDropDown={this.toggleMenu("school")}
                  onClickHandlerForDropDownItem={this.onClickHandler("school")}
                />
              </div>
              <Button className="">Get Salaat Times</Button>
            </Column>
            <Column isSize="1/2">
              <SalahTimes />
            </Column>
          </Columns>
        </Section>
      </div>
    );
  }
}

export default LocalSalahTimePage;
