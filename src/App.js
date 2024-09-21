import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmpForm from './component/EmpForm';
import EmpTable from './component/EmpTable';
import Header from './component/Header';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/form' element={<EmpForm/>}/>
      <Route path='/table' element={<EmpTable/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;
