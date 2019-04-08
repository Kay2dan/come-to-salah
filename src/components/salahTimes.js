import React from "react";
import { Columns, Column, Table } from "bloomer";

const SalahTimes = (
  {
    /*schedule*/
  }
) => (
  <Columns>
    <Column className="is-6 is-offset-3">
      <Table className="salahTimeTable">
        {/* <thead>
      <tr>
        <th>Salah</th>
        <th>Time</th>
      </tr>
    </thead> */}
        <tbody>
          <tr>
            <td>Imsak</td>
            <td>{`3:50am`}</td>
          </tr>
          <tr>
            <td>Fajr</td>
            <td>{`4:00am`}</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{`6:00am`}</td>
          </tr>
          <tr>
            <td>Dhuhr</td>
            <td>{`12:00pm`}</td>
          </tr>
          <tr>
            <td>Asr</td>
            <td>{`5:00pm`}</td>
          </tr>
          <tr>
            <td>Mughrib</td>
            <td>{`6:00pm`}</td>
          </tr>
          <tr>
            <td>Isha</td>
            <td>{`8:00pm`}</td>
          </tr>
        </tbody>
      </Table>
    </Column>
  </Columns>
);

export default SalahTimes;
