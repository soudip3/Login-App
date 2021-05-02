import React from 'react' 
import classes from '../MainHeader/HeaderContent.module.css'

const HeaderContent = (props) =>{
    const logout = () =>{
        props.logOut()
    }
    return (
        <div className={classes.nav}>
            <ul>
                <li>
                    <a href="\">Users</a>
                </li>
                <li>
                    <a href="\">Admin</a>
                </li>
                <li>
                    <button onClick={logout}>Log Out</button>
                </li>
            </ul>
        </div>
    )
}

export default HeaderContent;