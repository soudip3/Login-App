import './App.css';
import Header from './Components/MainHeader/Header'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <Home></Home>
    </div>
  );
}

export default App;
