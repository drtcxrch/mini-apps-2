import React from 'react';

const Table = (props) => {

  var score = props.score;
  console.log(score);
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
          <td colSpan='3'></td><td id="frame1" colSpan='3'>
            {score.frame_1 && score.frame_1.isStrike ?  'X' : null}
            {score.frame_1 ? score.frame_1.roll_1 :null}
            {score.frame_1 && score.frame_1.roll_2 ? `, ${score.frame_1.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame2" colSpan='3'>
            {score.frame_2 && score.frame_2.isStrike ? 'X' : null}
            {score.frame_2 ? score.frame_2.roll_1 :null}
            {score.frame_2 && score.frame_2.roll_2 ? `, ${score.frame_2.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame3" colSpan='3'>
            {score.frame_3 && score.frame_3.isStrike ? 'X' : null}
            {score.frame_3 ? score.frame_3.roll_1 :null}
            {score.frame_3 && score.frame_3.roll_2 ? `, ${score.frame_3.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame4" colSpan='3'>
            {score.frame_4 && score.frame_4.isStrike ? 'X' : null}
            {score.frame_4 ? score.frame_4.roll_1 :null}
            {score.frame_4 && score.frame_4.roll_2 ? `, ${score.frame_4.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame5" colSpan='3'>
            {score.frame_5 && score.frame_5.isStrike ? 'X' : null}
            {score.frame_5 ? score.frame_5.roll_1 :null}
            {score.frame_5 && score.frame_5.roll_2 ? `, ${score.frame_5.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame6" colSpan='3'>
            {score.frame_6 && score.frame_6.isStrike ? 'X' : null}
            {score.frame_6 ? score.frame_6.roll_1 :null}
            {score.frame_6 && score.frame_6.roll_2 ? `, ${score.frame_6.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame7" colSpan='3'>
            {score.frame_7 && score.frame_7.isStrike ? 'X' : null}
            {score.frame_7 ? score.frame_7.roll_1 :null}
            {score.frame_7 && score.frame_7.roll_2 ? `, ${score.frame_7.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame8" colSpan='3'>
            {score.frame_8 && score.frame_8.isStrike ? 'X' : null}
            {score.frame_8 ? score.frame_8.roll_1 :null}
            {score.frame_8 && score.frame_8.roll_2 ? `, ${score.frame_8.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame9" colSpan='3'>
            {score.frame_9 && score.frame_9.isStrike ? 'X' : null}
            {score.frame_9 ? score.frame_9.roll_1 :null}
            {score.frame_9 && score.frame_9.roll_2 ? `, ${score.frame_9.roll_2}` : null}
          </td>
          <td colSpan='3'></td><td id="frame10" colSpan='3'>
            {score.frame_10 && score.frame_10.isStrike ? 'X' : null}
            {score.frame_10 ? score.frame_10.roll_1:   null}
            {score.frame_10 && score.frame_10.roll_2 ? `, ${score.frame_10.roll_2}` : null}
          </td>
        </tr>
        <tr>
          <td colSpan='6' id="marker0">{score.frame_1 && score.frame_1.frameScore ? score.frame_1.frameScore : null}</td>
          <td colSpan='6' id="marker1">{score.frame_2 && score.frame_2.frameScore ? score.frame_2.frameScore : null}</td>
          <td colSpan='6' id="marker2">{score.frame_3 && score.frame_3.frameScore ? score.frame_3.frameScore : null}</td>
          <td colSpan='6' id="marker3">{score.frame_4 && score.frame_4.frameScore ? score.frame_4.frameScore : null}</td>
          <td colSpan='6' id="marker4">{score.frame_5 && score.frame_5.frameScore ? score.frame_5.frameScore : null}</td>
          <td colSpan='6' id="marker5">{score.frame_6 && score.frame_6.frameScore ? score.frame_6.frameScore : null}</td>
          <td colSpan='6' id="marker6">{score.frame_7 && score.frame_7.frameScore ? score.frame_7.frameScore : null}</td>
          <td colSpan='6' id="marker7">{score.frame_8 && score.frame_8.frameScore ? score.frame_8.frameScore : null}</td>
          <td colSpan='6' id="marker8">{score.frame_9 && score.frame_9.frameScore ? score.frame_9.frameScore : null}</td>
          <td colSpan='6' id="marker9">{score.frame_10 && score.frame_10.frameScore ? score.frame_10.frameScore : null}</td>
        </tr>
      </tbody>
    </table>
  )


}

export default Table;