import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import Search from "./components/Search/index";
import EmployeeCard from "./components/EmployeeCard/employee";
import employees from "./employees.json"

function App() {
  return (
    <Wrapper>
      <Title className="btn btn-success">Employee Directory </Title>
      <Search></Search>
      <EmployeeCard
        name={employees}
      ></EmployeeCard>

    </Wrapper>);
}

export default App;
