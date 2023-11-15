import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/Login/Login";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Detail from "./components/Details/Details";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" Component={Login}>
          </Route>
          <Route path="/home" Component={Home}>
          </Route>
          <Route path="/detail/:id" Component={Detail}>   
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
