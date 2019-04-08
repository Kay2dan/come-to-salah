import React from "react";
import SEO from "../components/seo";
import { Columns, Column, Container, Icon } from "bloomer";
import SalahTimes from "../components/salahTimes";
import "../styles/localSalahTime.sass";

const LocalSalahTimePage = () => {
  const { localStorage } = window;
  const userLocation = JSON.parse(localStorage.getItem("userCoOrdForSalah"));
  //https://stackoverflow.com/questions/6159074/given-the-lat-long-coordinates-how-can-we-find-out-the-city-country
  const getUserLocation = () =>
    userLocation ||
    window.navigator.geolocation.getCurrentPosition(
      coord => {
        const { latitude, longitude } = coord;
        console.log("coords are:", latitude, longitude);
        userLocation = { latitude, longitude };
        window.localStorage.setItem("userCoordForSalah", userLocation);
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
    );

  const gregorianDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // fetch hijri date

  return (
    <Container className="">
      <SEO
        title="Local Salah Time"
        keywords={[`salah`, `salaat`, `salat`, `prayer`]}
      />
      <main>
        <Container className="level">
          {/* icon for month view page */}
          <Icon className="level-item" />
          <h1 className="level-item">Local Salah Time</h1>
        </Container>
        <Container className="has-text-centered dateSection">
          <div className="">{gregorianDate}</div>
          <div className="">Hijri Date</div>
        </Container>
        <Container className="level userLocation" onClick={getUserLocation}>
          <Icon isSize="" className="level-item" />
          <span className="level-item">{`Your location: ${userLocation}`}</span>
        </Container>
        <SalahTimes />
      </main>
    </Container>
  );
};

export default LocalSalahTimePage;
