import React,{useRef} from 'react'
import classes from '../Login/Login.module.css'
import Card from '../UI/Card'

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const checkLogin = (e) => {
        e.preventDefault();
        props.checkLogin(emailRef.current.value, passwordRef.current.value)
        emailRef.current.value = ''
        passwordRef.current.value = ''
    }

    return(
        <Card className={classes.login}>
            <form onSubmit={checkLogin}>
                <div className={classes.control}>
                    <label>Email</label>
                    <input type="text" placeholder="Email" ref={emailRef}></input>
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type="password" placeholder="Password" ref={passwordRef}></input>
                </div>
                <div className={classes.action}>
                    <button className={classes.button}>Login</button>                   
                </div>   
            </form>
        </Card>
    )
}

export default Login;