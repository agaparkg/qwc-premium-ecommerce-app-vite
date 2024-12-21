import { ImEnter } from "react-icons/im";
import { IoPersonOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import logo from "../assets/logo.svg";

const Header = () => {
  const { pathname } = useLocation();

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
        <NavItem
          className={`${
            pathname === "/" && "border-3 border-bottom border-primary"
          }`}
        >
          <NavLink className="text-light" href="/">
            HOME
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            pathname === "/about" && "border-3 border-bottom border-primary"
          }`}
        >
          <NavLink className="text-light" href="/about">
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            pathname === "/contact" && "border-3 border-bottom border-primary"
          }`}
        >
          <NavLink className="text-light" href="/contact">
            CONTACT
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            pathname === "/dashboard" && "border-3 border-bottom border-primary"
          }`}
        >
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
