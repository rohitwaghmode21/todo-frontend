import './App.css';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/todo" element = {<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
