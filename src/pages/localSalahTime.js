import React from "react";
import SEO from "../components/seo";
import { Columns, Column, Container, Icon } from "bloomer";
import SalahTimes from "../components/salahTimes";

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

  return (
    <>
      <SEO
        title="Local Salah Time"
        keywords={[`salah`, `salaat`, `salat`, `prayer`]}
      />
      <main>
        <Container>
          <h1>Local Salah Time</h1>
          <Icon className="" />
          {/* icon for month view page */}
        </Container>
        <Columns>
          <Column isSize="1/2">
            <div>Gregorian Date</div>
          </Column>
          <Column isSize="1/2">
            <div>Hijri Date</div>
          </Column>
        </Columns>
        <Container>
          <div onClick={getUserLocation}>
            <Icon isSize="small" className="" />
            {`Your location: ${userLocation}`}
          </div>
        </Container>
        <SalahTimes />
      </main>
    </>
  );
};

export default LocalSalahTimePage;
