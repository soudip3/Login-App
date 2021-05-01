import React from 'react'
import classes from '../Login/Login.module.css'
import Card from '../UI/Card'

const Login = () => {
    return(
        <Card className={classes.login}>
            <form>
                <div className={classes.control}>
                    <label>Email</label>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className={classes.action}>
                    <button className={classes.button}>Login</button>                   
                </div>   
            </form>
        </Card>
    )
}

export default Login;