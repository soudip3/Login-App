import React from 'react' 
import classes from '../MainHeader/HeaderContent.module.css'

const HeaderContent = () =>{
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
                    <button>Log Out</button>
                </li>
            </ul>
        </div>
    )
}

export default HeaderContent;