import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

// Styles
import styles from "./header.module.sass";

interface TMenuItem {
  id: number;
  text: string;
  link: string;
}

export default class Header extends Component<{ menuItems: TMenuItem[] }> {
  constructor(props: { menuItems: TMenuItem[] }) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar className={styles.mainmenu} color="light" light>
        <Nav>
          {this.props.menuItems.map((item) => (
            <NavItem key={item.id}>
              <Link className="nav-link" to={item.link}>
                {item.text}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}
