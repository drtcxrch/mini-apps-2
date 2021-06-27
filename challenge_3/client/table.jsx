import React from 'react';

const Table = () => {
  return (
    <table id='scorecardTable' className='scorecard' cellPadding='1' cellSpacing='0'>
      <tbody>
      <tr>
        <th colSpan='6'>Frame 1</th>
        <th colSpan='6'>Frame 2</th>
        <th colSpan='6'>Frame 3</th>
        <th colSpan='6'>Frame 4</th>
        <th colSpan='6'>Frame 5</th>
        <th colSpan='6'>Frame 6</th>
        <th colSpan='6'>Frame 7</th>
        <th colSpan='6'>Frame 8</th>
        <th colSpan='6'>Frame 9</th>
        <th colSpan='6'>Frame 10</th>
      </tr>
      <tr>
        <td colSpan='3'></td><td id="frame1" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame2" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame3" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame4" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame5" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame6" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame7" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame8" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame9" colSpan='3'></td>
        <td colSpan='3'></td><td id="frame10" colSpan='3'></td>
      </tr>
      <tr>
        <td colSpan='6' id="marker0"></td>
        <td colSpan='6' id="marker1"></td>
        <td colSpan='6' id="marker2"></td>
        <td colSpan='6' id="marker3"></td>
        <td colSpan='6' id="marker4"></td>
        <td colSpan='6' id="marker5"></td>
        <td colSpan='6' id="marker6"></td>
        <td colSpan='6' id="marker7"></td>
        <td colSpan='6' id="marker8"></td>
        <td colSpan='6' id="marker9"></td>
      </tr>
      </tbody>
    </table>
  )
}

export default Table;