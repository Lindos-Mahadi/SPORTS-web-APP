import React from 'react'
import {NavLink, Link} from "react-router-dom";
import "./sideNav.css"
import HomeIcon from '@material-ui/icons/Home';
import FontAwesome from 'react-fontawesome';
export default function SideNavItems() {
    const items = [
        {
            type: "option",
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: "option",
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: "option",
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: "option",
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: "option",
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]
    const showItems = () => {
        return items.map( (item,i) =>{
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        } )
    }
    return (
        <React.Fragment>
            {showItems()}
        </React.Fragment>
    )
}
