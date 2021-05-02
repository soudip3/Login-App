import React from 'react';
import Card from '../UI/Card'
import classes from '../Home/Home.module.css'

const Home = (props) =>{
    
    return(
        <Card className={classes.home}>
            <h1>Welcome Back!!! {props.value[0].email}</h1>
        </Card>
    )
}

export default Home;