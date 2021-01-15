import React, {useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import '../scss/TimeBox.scss';

const TimeBox = () => {

  const [birthTime, setBirthTime] = useState(moment('2021/1/15 00:00:00').format('hh:mm:ss'));
  const [seconds, setNowSeconds] = useState(moment().format('hh:mm:ss'));
  const [minutes, setNowMinutes] = useState('');
  const [isMessage, setIsMessage] = useState(false);

  setInterval(() => {
    if (moment('2021/01/16 00:00:00').isAfter(moment())) {
      setNowSeconds(parseInt(moment('2021/01/16 00:00:00').diff(moment(), 'seconds')) % 60);
      setNowMinutes(parseInt(moment('2021/01/16 00:00:00').diff(moment(), 'minutes')));
    } else {
      clearInterval();
      setIsMessage(true);
    }
  }, 1000);

  return (
    <div className="timebox">
      {
        isMessage
          ? (
            <p className="birth__complete">
              김준재님 생일 축하드려요!!!
            </p>
          )
          : (
            <>
            <div className="tellname">
              <span>김준재</span>
              <span> 님의 생일이...</span>
            </div>
          <div className="timetable">
            <time>
          {minutes} 분
            </time>
            <time>
            &nbsp;{seconds} 초
            </time>
            </div>
            <div className="tellname">
            <span>남았습니다.</span>
            </div>
            </>
          )
      }

    </div>
  );
};

export default TimeBox;