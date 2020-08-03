import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

export const Dates = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [selectionComplete, toggleSelectionComplete] = useState(false);

  const handleDateChange = (date) => {
    if (!selectionComplete && !startDate) {
      //on first date selection, set the start date

      setStartDate(date);
      return;
    }

    if (!selectionComplete && startDate && !endDate) {
      //on second date selection, set the end date

      setEndDate(date);
      toggleSelectionComplete(true);

      //do stuff with date range

      return;
    }

    if (selectionComplete && startDate && endDate) {
      //on third date selection, begin selection of a new date range
      //reset the start date and clear the end date.

      setStartDate(date);
      setEndDate(undefined);
      toggleSelectionComplete(false);
      return;
    }
  };

  const handleSelect = (date) => {
    //onChange is not fired if selecting same date - workaround to fire handleDateChange
    if (
      !selectionComplete &&
      startDate &&
      !endDate &&
      sameDay(date, startDate)
    ) {
      handleDateChange(date);
    }
  };

  const sameDay = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      onSelect={handleSelect}
      selectsEnd={Boolean(startDate)}
      startDate={startDate}
      endDate={endDate}
      inline
    >
      <div className="date-range">
        {startDate ? moment(startDate).format("DD/MM/YYYY") : "??/??/????"} -{" "}
        {endDate ? moment(endDate).format("DD/MM/YYYY") : "??/??/????"}
      </div>
    </DatePicker>
  );
};
