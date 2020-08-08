import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

const Dates = () => {
  const [startDate, SetStartDate] = useState(new Date("2000/01/01"));
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DatePicker
        startDate={startDate}
        selected={startDate}
        onSelect={(date) => SetStartDate(date)}
        selectsStart
        endDate={endDate}
        minDate={startDate}
        showYearDropdown
      />
      <DatePicker
        endDate={endDate}
        onSelect={(date) => setEndDate(date)}
        selected={endDate}
        selectsEnd
        startDate={startDate}
        showYearDropdown
      />
    </>
  );
};

export default Dates;
