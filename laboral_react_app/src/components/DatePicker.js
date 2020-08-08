import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { format } from "date-fns";

const Dates = () => {
  const [startDate, SetStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSelectDate = (date) => {
    SetStartDate(date);
    setEndDate(date);
    console.log(date);
  };

  return (
    <>
      <DatePicker
        startDate={startDate}
        //selected={startDate}
        onSelect={onSelectDate}
        placeholderText="Ingreso"
      />
      <DatePicker
        endDate={endDate}
        onSelect={onSelectDate}
        placeholderText="Egreso"
      />
    </>
  );
};

export default Dates;
