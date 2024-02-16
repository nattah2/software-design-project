// import logo from './logo.svg';
import './App.css';
import Register from './components/register/register.js'
// import Login from './components/login/login.js'
import MyNavbar from './components/navbar/navbar.js'
import Button from 'react-bootstrap/Button'
import './assets/bootstrap/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="App-header">
        <Register/>
      </header>
    </div>
  );
}

export default App;

// import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import MyDate from './components/date/date.js'
// import Login from './components/login/login.js'
