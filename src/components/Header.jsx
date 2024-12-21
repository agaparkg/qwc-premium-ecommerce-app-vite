import { ImEnter } from "react-icons/im";
import { IoPersonOutline } from "react-icons/io5";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={logo}
          style={{
            height: 40,
            width: 40,
          }}
          className="me-3"
        />
        QWC Premium
      </NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink className="text-light" href="/">
            HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/about">
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/contact">
            CONTACT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/dashboard">
            DASHBOARD
          </NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink href="/profile">
            <IoPersonOutline className="text-light" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">
            <ImEnter className="text-light" />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
