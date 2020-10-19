import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavItem.css';

const navItem = (props) => (
    <li className={classes.NavItem}>
        <NavLink activeClassName={classes.active} to={props.link} exact>{props.children}</NavLink >
    </li>
);

export default navItem;