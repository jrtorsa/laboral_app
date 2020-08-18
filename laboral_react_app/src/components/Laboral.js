import React, { Component } from "react";
import Dates from "./WorkedTime";
import Styles from "./styles";

class Laboral extends Component {
  state = {
    salary: "",
    bonus: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const { salary, bonus } = this.state;
    const dailySalary = Math.floor(salary / 30);
    const integratedSalary = dailySalary + parseInt(bonus);

    return (
      <Styles>
        <h1 className="title">Laboral App</h1>
        <div className="header">Calcula Tu Liquidacion</div>
        <div className="body">
          <div className="salary">
            <label htmlFor="name">Nombre</label>
            <input name="name" type="text" placeholder="Nombre Completo" />
          </div>
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
              <br />
              Tiempo Laborado =
            </label>
            <Dates />
          </div>
        </div>
        <div className="right-panel">
          <div className="body">
            <div className="salary">
              <label>Salario Diario = </label>
              <input value={dailySalary} disabled />
            </div>
            <div className="salary">
              <label>Bonos = </label>
              <input
                type="number"
                name="bonus"
                value={bonus}
                onChange={this.handleChange}
              />
            </div>
            <div className="salary">
              <label>Salario Integrado = </label>
              <input value={integratedSalary} disabled />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Laboral;
