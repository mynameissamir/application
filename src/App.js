import logo from './logo.svg';
import './App.css';
import Loginform from './loginform';
import Displayproduct from './displayproduct';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   <Routes>
     <Route exact path='/' element={<Loginform />}></Route>
     <Route exact path="/dashboard" element={<Displayproduct />}></Route>
   </Routes>
  );
}

export default App;
