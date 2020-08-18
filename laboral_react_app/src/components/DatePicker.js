import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
//import es from "date-fns/locale/es";

class Dates extends Component{

  state ={
    startDate: new Date(),
    endDate: new Date()
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  }

 calculateDaysLeft(startDate, endDate){
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days") / 365;
  }
render(){
  const { startDate, endDate } = this.state;
  const daysLeft = this.calculateDaysLeft(startDate, endDate);
  return (
    <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
        />
        &nbsp;&nbsp;&nbsp;
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
        <div className="amount">{daysLeft}</div>
    </div>
  )
}
}

export default Dates

