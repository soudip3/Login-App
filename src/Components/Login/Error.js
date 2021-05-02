import React from 'react'
import Card from '../UI/Card'
import classes from '../Login/Error.module.css'
const Error = (props) =>{

    const errorCheck = () => {
        props.onError()
    }

    return (
        <div className={classes.backdrop}>
            <Card className={classes.error}>
                <header className={classes.header}>
                    <h2>{props.header}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <button className={classes.button} onClick={errorCheck}>Okay</button>
                </footer>
            </Card>
        </div>
    )
}

export default Error;