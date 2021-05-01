import React from 'react';
import Card from '../UI/Card'
import classes from '../Home/Home.module.css'

const Home = () =>{
    return(
        <Card className={classes.home}>
            <h1>Welcome Back!!!</h1>
        </Card>
    )
}

export default Home;