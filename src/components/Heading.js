import React from "react";

const Heading = () => {
  const d = new Date();
  const dayIndex = d.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = days[dayIndex];
  const date = d.getDate();
  const formattedDate = date < 10 ? `0${date}` : date;
  const monthIndex = d.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[monthIndex];
  const year = d.getFullYear();
  return (
    <div className='header'>
      <h1>{today}</h1>
      <h3>{`${formattedDate} ${monthName}, ${year}`}</h3>
    </div>
  );
};

export default Heading;
