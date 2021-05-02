import React from 'react'
import classes from '../MainHeader/Header.module.css'
import HeaderContent from './HeaderContent'

const Header = (props) => {
    const logout = () =>{
        props.logOut()
    }
    return (
        <div className={classes.header}>
            <h3 className={classes.h1}>A Typical Page</h3>
            {props.home && <HeaderContent logOut={logout}></HeaderContent>}
        </div>
    )
}

export default Header;