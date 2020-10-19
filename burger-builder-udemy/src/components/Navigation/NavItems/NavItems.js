import React from "react";

import classes from "./NavItems.css";
import NavItem from "../NavItems/NavItem/NavItem";
import Aux from "../../../HOC/Aux";

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    {props.isAuthenticated ? (
      <Aux>
        <NavItem link="/orders">Orders</NavItem>
        <NavItem link="/logout">Log Out</NavItem>
      </Aux>
    ) : (
      <NavItem link="/auth">Authentication</NavItem>
    )}
  </ul>
);

export default navItems;
