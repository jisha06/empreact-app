import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import Signin from './components/Signin';
import UserEmpoyeeList from './components/UserEmpoyeeList';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Signin/>}></Route>
      <Route path='/addemployee' exact element={<AddEmployee/>}></Route>
      <Route path='/viewemployee' exact element ={<EmployeeList/>}></Route>
      <Route path='/editemployee/:empid' exact element ={<EditEmployee/>}></Route>
      <Route path='/useremployeelist' exact element ={<UserEmpoyeeList/>}></Route>
      
    </Routes>
   </BrowserRouter>   
  );
}

export default App;
