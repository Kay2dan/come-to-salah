import React from "react";
import { Columns, Column, Table } from "bloomer";
import PropTypes from "prop-types";

/**
 *      I had to manually insert the table entries below because
 *      the returned json obj is not in ordered sequence
 */
const SalahTimes = ({ timings }) => {
  return (
    <Columns>
      <Column className="is-6 is-offset-3">
        <Table className="salahTimeTable">
          <tbody>
            <tr>
              <td>Imsak</td>
              <td>{timings.Imsak}</td>
            </tr>
            <tr>
              <td>Fajr</td>
              <td>{timings.Fajr}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{timings.Sunrise}</td>
            </tr>
            <tr>
              <td>Dhuhr</td>
              <td>{timings.Dhuhr}</td>
            </tr>
            <tr>
              <td>Asr</td>
              <td>{timings.Asr}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{timings.Sunset}</td>
            </tr>
            <tr>
              <td>Maghrib</td>
              <td>{timings.Maghrib}</td>
            </tr>
            <tr>
              <td>Isha</td>
              <td>{timings.Isha}</td>
            </tr>
            <tr>
              <td>Midnight</td>
              <td>{timings.Midnight}</td>
            </tr>
          </tbody>
        </Table>
      </Column>
    </Columns>
  );
};

SalahTimes.defaultProps = {
  Imsak: "-",
  Fajr: "-",
  Sunrise: "-",
  Dhuhr: "-",
  Asr: "-",
  Sunset: "-",
  Maghrib: "-",
  Isha: "-",
  Midnight: "-",
};

SalahTimes.propTypes = {
  timings: PropTypes.object,
};

export default SalahTimes;
