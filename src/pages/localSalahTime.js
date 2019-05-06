import React, { Component } from "react";
import SEO from "../components/seo";
import { Button, Column, Columns, Section, Title } from "bloomer";
import SalahTimes from "../components/SalahTimes";
import "../styles/localSalahTime.sass";
import DropDownContainer from "../components/Dropdown";

class LocalSalahTimePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      method: 0,
      userLocation: {
        lattitude: "",
        longitude: "",
      },
      year: new Date().getYear(),
      error: "", // for error handling
    };
  }

  method = [
    "Shia Ithna-Ansari",
    "University of Islamic Sciences, Karachi",
    "Islamic Society of North America",
    "Muslim World League",
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

  school = ["Hanafi", "Shafi"];

  //https://stackoverflow.com/questions/6159074/given-the-lat-long-coordinates-how-can-we-find-out-the-city-country
  getUserLocation = () => {
    const { localStorage } = window;
    let userLocation = JSON.parse(localStorage.getItem("userCoOrdForSalah"));
    return (
      userLocation ||
      window.navigator.geolocation.getCurrentPosition(
        coord => {
          const { latitude, longitude } = coord;
          console.log("coords are:", latitude, longitude);
          userLocation = { latitude, longitude };
          window.localStorage.setItem("userCoordForSalah", userLocation);
          this.setState({
            userLocation,
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
    // const {
    //   userlocation: { lattitude, longitude },
    //   method,
    //   month,
    //   year,
    // } = this.state;
    const lattitude = ""; // temp
    const longitude = ""; // temp
    const month = 5; // temp
    const year = 2019; // temp
    const method = 0; // temp
    if (!lattitude) {
      const result = await this.getUserLocation();
      console.log("result within Fetch: ", result);
      const url = `http://api.aladhan.com/v1/calendar?latitude=${lattitude}&longitude=${longitude}&method=${method}&month=${month}&year=${year}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log("resp from json data: ", data);
      // 1 - store the relevant data into state
      // 2 - add error handling
    }
  };

  onClickHandler = () => {};

  render() {
    const { userLocation } = this.state;
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
              {/* <div className="has-text-centered dateSection">
                <div className="">gregorianDate</div>
                <div className="">Hijri Date</div>
              </div> */}
              <div className="has-text-centered dateSection level">
                <div className="level-left">gregorianDate</div>
                <div className="level-right">Hijri Date</div>
              </div>
              <div
                className="level userLocation"
                onClick={this.getUserLocation}
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
                  data={this.method}
                  btnTxt="Select method:"
                  onClickHandler=""
                />
              </div>
              <div className="level">
                <Title isSize="6" className="level-item is-hidden-mobile">
                  School:
                </Title>
                <DropDownContainer
                  className="level-item"
                  data={this.school}
                  btnTxt="Select school:"
                  onClickHandler=""
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
