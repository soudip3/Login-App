import React from 'react'
import classes from '../MainHeader/Header.module.css'
import HeaderContent from './HeaderContent'

const Header = () => {
    return (
        <div className={classes.header}>
            <h3 className={classes.h1}>A Typical Page</h3>
            <HeaderContent></HeaderContent>
        </div>
    )
}

export default Header;