import styled from "styled-components";

export default styled.div`
  margin-top: 200px;
  display: inline-flex;
  flex-direction: column;
  font-family: "Lucida Sans", sans-serif;

  .title {
    background-color: #454546;
    width: 250px;
    border-radius: 5px;
    text-align: center;
  }

  .header {
    padding-bottom: 15px;
    width: 250px;
    text-align: center;
  }

  .body {
    display: table;
    width: 500px;
  }

  .salary {
    display: table-row;
  }

  .vacations {
    display: table-row;
  }

  .startDate {
    display: table-row;
  }

  .endDate {
    display: table-row;
  }

  label {
    display: table-cell;
    width: 200px;
  }

  input {
    width: 150px;
  }

  .button {
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
  }

  .right-panel {
    width: 500px;
    float: left;
  }
`;
