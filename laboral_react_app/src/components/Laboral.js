import React, { Component } from "react";
import Dates from "./DatePicker";
import Styles from "./styles";

class Laboral extends Component {
  state = {
    salary: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const { salary } = this.state;
    const dailySalary = Math.floor(salary / 30);

    return (
      <Styles>
        <h1 className="title">Laboral App</h1>
        <div className="header">Calcula Tu Liquidacion</div>
        <div className="body">
          <div className="salary">
            <label htmlFor="salary">Sueldo Mensual</label>
            <input
              name="salary"
              min="125"
              type="number"
              placeholder="Sueldo"
              value={salary}
              onChange={this.handleChange}
            />
          </div>
          <div className="vacations">
            <label htmlFor="vacations">Vacaciones</label>
            <input min="1" type="number" placeholder="Dias de Vacaciones" />
          </div>
          <div className="startDate">
            <label htmlFor="startDate">
              Fechas de Ingreso
              <br />
              Fecha de Egreso
            </label>
            <Dates />
          </div>
        </div>
        <div className="button">
          <button>Calcular</button>
        </div>
        <div className="right-panel">
          <div className="header">Resultados</div>
          <div className="body">
            <div className="salary">
              <label>Salario Diario = </label>
              <input value={dailySalary} disabled />
            </div>
            <div className="startDate">
              <label>Tiempo Laborado = </label>
              <input value={dailySalary} disabled />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Laboral;
