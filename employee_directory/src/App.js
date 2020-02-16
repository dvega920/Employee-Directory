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
      <Title>Employee Directory </Title>
      <Search></Search>
      <EmployeeCard
        id={employees[0].id}
        image={employees[0].image}
        name={employees[0].name}
        phone={employees[0].phone}
        email={employees[0].email}
        dob={employees[0].dob}
      />
    </Wrapper>);
}

export default App;
