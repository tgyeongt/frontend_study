import x from '@components/stu4/stu4img/x.svg';
import glasses from '@components/stu4/stu4img/m.svg';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from '@components/stu4/Stu4Modal.module.css';
import up from '@components/stu4/stu4img/up.svg';
import down from '@components/stu4/stu4img/down.svg';

export default function Stu4Modal({ children, onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackground} onClick={handleBackgroundClick}>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  );
}
function ModalHeader({ children }) {
  return <div className={styles.headerBox}>{children}</div>;
}

function HeaderTitle() {
  return <p className={styles.title}>약속시간 탐색</p>;
}

function HeaderCancelButton({ onClose }) {
  return (
    <button onClick={onClose} className={styles.CancelBtn}>
      <img src={x} alt="닫기" onClick={onClose} />
    </button>
  );
}

function HeadText() {
  return <p className={styles.headText}>약속시간을 탐색해보세요</p>;
}

function BodyContanier({ children }) {
  return <div className={styles.bodyBox}>{children}</div>;
}

function PromiseName() {
  return (
    <div className={styles.promiseBox}>
      <p className={styles.pText}>약속명</p>
      <input
        className={styles.promiseInput}
        placeholder="약속명을 입력해주세요"
      ></input>
    </div>
  );
}

function PromiseParticipant() {
  return (
    <div className={styles.participantBox}>
      <p className={styles.pText}>참여자</p>
      <div className={styles.participantInputWrapper}>
        <input
          className={styles.participantInput}
          placeholder="친구의 플랜팔 닉네임을 입력해주세요"
        />
        <button className={styles.participantBtn}>
          <img className={styles.participantImg} src={glasses} />
        </button>
      </div>
    </div>
  );
}

function PromiseTime({ children }) {
  return (
    <div className={styles.setPromiseBox}>
      <p className={styles.pText}>약속 가능 시간</p>
      {children}
    </div>
  );
}

function SetDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className={styles.datePickerBox}>
      <DatePicker
        className={styles.timeBox}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy.MM.dd"
        placeholderText="YY.MM.DD"
        showPopperArrow={false}
      />
      <p className={styles.timehyphen}></p>
      <DatePicker
        className={styles.timeBox}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy.MM.dd"
        placeholderText="YY.MM.DD"
        showPopperArrow={false}
      />
    </div>
  );
}
function SetTime() {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className={styles.datePickerBox}>
      <DatePicker
        className={styles.timeBox}
        selected={selectedTime}
        onChange={(time) => setSelectedTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="시간"
        dateFormat="HH:mm"
        placeholderText="AM 00:00"
        showPopperArrow={false}
      />
      <p className={styles.timehyphen}></p>
      <DatePicker
        className={styles.timeBox}
        selected={selectedTime}
        onChange={(time) => setSelectedTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="시간"
        dateFormat="HH:mm"
        placeholderText="AM 00:00"
        showPopperArrow={false}
      />
    </div>
  );
}
function TimeLength() {
  const [length, setLength] = useState(0);

  const increaseLength = () => {
    setLength((prev) => prev + 1);
  };

  const decreaseLength = () => {
    setLength((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={styles.lengthBox}>
      <p className={styles.pText}>약속 길이</p>

      <div className={styles.lengthWrapper}>
        <span className={styles.lengthSpan}>
          {length.toString().padStart(2, '0')}
          <span className={styles.lengthHour}>h</span>
        </span>
        <div className={styles.lengthButtons}>
          <button className={styles.lengthArrow} onClick={increaseLength}>
            <img className={styles.lengthArrowUp} src={up} />
          </button>
          <button className={styles.lengthArrow} onClick={decreaseLength}>
            <img className={styles.lengthArrowDown} src={down} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PromiseFindBtn() {
  return <button className={styles.findBtn}>약속시간 탐색하기</button>;
}

Stu4Modal.Header = ModalHeader;
Stu4Modal.Title = HeaderTitle;
Stu4Modal.CancelBtn = HeaderCancelButton;
Stu4Modal.HeaderText = HeadText;
Stu4Modal.Body = BodyContanier;
Stu4Modal.PromiseName = PromiseName;
Stu4Modal.Participant = PromiseParticipant;
Stu4Modal.Time = PromiseTime;
Stu4Modal.Date = SetDate;
Stu4Modal.Hour = SetTime;
Stu4Modal.FindBtn = PromiseFindBtn;
Stu4Modal.Lengtn = TimeLength;
