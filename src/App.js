import React, {useState} from 'react'
import './App.css';
import Header from './Components/MainHeader/Header'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Error from './Components/Login/Error'

let data = [
  {
    id:1,
    email: "soudiph@outlook.com",
    password: "Soudip123"
  },
  {
    id:2,
    email: "r.soudiphalder@gmail.com",
    password: "soudip123"
  }
]


function App() {

  const [check, setCheck] = useState(false)
  const [error, setError] = useState([])
  const onCheckLogin =(emailRef,passwordRef) => {
    if(emailRef.trim().length===0 || passwordRef.length === 0){
      const e = {
        header : "Invalid Input",
        content : "Please Provide Email ID or Password"
      }
      setError(e)
    }
    else {
      const user = data.filter( d => {
        return d.email === emailRef && d.password === passwordRef;
      })
      if(user.length){
        setCheck(true)
      }
      else{
        const e = {
          header: "Invalid Input",
          content : "Please Provide Correct Email ID and Password"
        }
        setError(e)
      }
    }
  }
  
    const errorCheck = () => {
      setError([])
    }
  const logout = () => {
    setCheck(false)
  }
    
  return (
    <div className="App">
      <Header logOut={logout} home={check}></Header>
      {!check && <Login checkLogin={onCheckLogin}></Login>}
      {check && <Home></Home>}
      {error.length!==0 && <Error content={error.content} header={error.header} onError={errorCheck}></Error>}
    </div>
  );
}

export default App;
