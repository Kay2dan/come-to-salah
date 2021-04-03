import React, { Component } from "react";
import SEO from "../components/seo";
import { Button, Column, Columns, Section, Title } from "bloomer";
import SalahTimes from "../components/SalahTimes";
import DropDownContainer from "../components/Dropdown";
import { methodData, schoolData, salahTimesEndpoint } from "../data/constants";
import "../styles/localSalahTime.sass";

class LocalSalahTimePage extends Component {
  constructor(props) {
    super(props);
    let lat = null,
      lng = null,
      selectedMethod = null,
      selectedSchool = null;
    if (typeof window !== `undefined`) {
      lat = window.localStorage.getItem("cts_latitude") || null;
      lng = window.localStorage.getItem("cts_longitude") || null;
      selectedMethod = window.localStorage.getItem("cts_method") || null;
      selectedSchool = window.localStorage.getItem("cts_school") || null;
    }
    this.state = {
      userLocation: {
        lat: lat,
        lng: lng,
      },
      method: {
        selected: selectedMethod,
        toggleMenu: false,
      },
      school: {
        selected: selectedSchool,
        toggleMenu: false,
      },
      error: "", // for error handling
      fetchResponse: {
        data: {
          date: {},
          timings: {},
        },
      },
    };
    this.getUserLocationInPromise = this.getUserLocationInPromise.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
  }

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocationInPromise = () => {
    return new Promise(function(resolve, reject) {
      window.navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
      });
    });
  };

  getUserLocation = async () => {
    try {
      const coord = await this.getUserLocationInPromise();
      const { localStorage } = window;
      const {
        coords: { latitude, longitude },
      } = coord;
      this.setState({
        userLocation: {
          lat: latitude,
          lng: longitude,
        },
      });
      localStorage.setItem("cts_latitude", latitude);
      localStorage.setItem("cts_longitude", longitude);
    } catch (err) {
      const { code, msg } = err;
      const customMsg =
        code === 1
          ? "Location is needed to get the local salah time, please try again."
          : "Sorry, something went wrong, please try again or try again later.";
      this.setState({
        error: `${code}: ${customMsg}. ${msg}`,
      });
    }
  };

  //      https://aladhan.com/prayer-times-api
  //      specifically => https://aladhan.com/prayer-times-api#GetTimings
  //      See the above link for documentation for the
  //      api we are using to get the salah times
  updateSalahTimes = async () => {
    const { userLocation, method, school } = this.state;
    let isStateNeedingUpdate = false;
    const newState = {
      ...this.state,
    };
    if (!userLocation.lat) {
      await this.getUserLocation();
    }
    if (!method.selected) {
      newState.method.selected = 2;
      localStorage.setItem("cts_method", 2); // set defaults
      isStateNeedingUpdate = true;
    }
    if (!school.selected) {
      newState.school.selected = 0;
      localStorage.setItem("cts_school", 0); // set default
      isStateNeedingUpdate = true;
    }
    if (isStateNeedingUpdate) {
      this.setState(
        {
          ...newState,
        },
        () => {
          this.fetchSalahTimes();
        }
      );
    } else {
      this.fetchSalahTimes();
    }
  };

  fetchSalahTimes = () => {
    const { userLocation, method, school } = this.state;
    const url = salahTimesEndpoint({
      lat: userLocation.lat,
      lng: userLocation.lng,
      method: method.selected,
      school: school.selected,
    });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          fetchResponse: data,
        });
      })
      .catch(err => {
        this.setState({
          error: err,
        });
      });
  };

  toggleMenu = type => () =>
    this.setState({
      [type]: {
        toggleMenu: !this.state[type].toggleMenu,
      },
    });

  onClickHandler = type => e => {
    const newState = { ...this.state[type] };
    newState.selected = e.target.innerText;
    newState.toggleMenu = !newState.toggleMenu;
    window.localStorage.setItem(`cts_${type}`, e.target.innerText);
    this.setState({
      [type]: { ...newState },
    });
  };

  render() {
    const { userLocation, method, school, fetchResponse } = this.state;
    const { timings, date } = fetchResponse.data;
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
                <div className="level-left">
                  {date.readable ? date.readable : `Gregorian Date`}
                </div>
                <div className="level-right">
                  {date.hijri
                    ? `${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year}`
                    : `Hijri Date`}
                </div>
              </div>
              <div
                className="level userLocation"
                onClick={this.getUserLocation}
              >
                {/* <Icon isSize="" className="level-item" /> */}
                {(userLocation.lat && userLocation.lat.toFixed && (
                  <div className="level-item">{`Your location: (lat: ${userLocation.lat.toFixed(
                    3
                  )}, lng: ${userLocation.lng.toFixed(3)})`}</div>
                )) ||
                  undefined}
              </div>
              <div className="level">
                <Title
                  isSize="6"
                  className="level-item is-justify-content-flex-start is-hidden-mobile"
                >
                  Method:
                </Title>
                <DropDownContainer
                  data={methodData}
                  btnTxt="method"
                  stateProps={method}
                  onClickHandlerForDropDown={this.toggleMenu("method")}
                  onClickHandlerForDropDownItem={this.onClickHandler("method")}
                />
              </div>
              <div className="level">
                <Title
                  isSize="6"
                  className="level-item is-justify-content-flex-start is-hidden-mobile"
                >
                  School:
                </Title>
                <DropDownContainer
                  data={schoolData}
                  btnTxt="school"
                  stateProps={school}
                  onClickHandlerForDropDown={this.toggleMenu("school")}
                  onClickHandlerForDropDownItem={this.onClickHandler("school")}
                />
              </div>
              <Button className="" onClick={this.fetchSalahTimes}>
                <span>Get Salaat Times</span>
              </Button>
            </Column>
            <Column isSize="1/2">
              <SalahTimes timings={timings} />
            </Column>
          </Columns>
        </Section>
      </div>
    );
  }
}

export default LocalSalahTimePage;
