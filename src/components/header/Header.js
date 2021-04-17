import React from 'react';
import style from './header.css'
import { Link } from 'react-router-dom';

import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import SideNav from "./sideNav/SideNav";

const Header = (props) => {


    const navBars = () => (
        <div className="bars">
            <HorizontalSplitIcon
                onClick={props.onOpenNav}

                style={{
                    color:'#dfdfdf',
                    padding:'10px 0 0 10px',
                    cursor:'pointer',
                    fontSize: '35px'
                }}
            />
        </div>
    )

    const logo = () => (
        <Link to="/" className="logo">
            <img alt="nba logo" src="/images/nba_logo.png"/>
        </Link>
    )
    

    return (
        <header className="header">
            <SideNav {...props} /> 
            <div className="headerOptional">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;