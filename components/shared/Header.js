import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthorized } from "@/utils/auth0";
import ReactResizeDetector from "react-resize-detector";
import { useGetUser } from "@/actions/user";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import ActiveLink from "@/components/shared/ActiveLink";

const BsNavLink = (props) => {
  const { href, title, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <div className={`nav-link port-navbar-link ${className}`}>{title}</div>
    </ActiveLink>
  );
};

const LoginLink = () => {
  return (
    <a className="nav-link port-navbar-link" href="/api/auth/login">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
        />
      </svg>
    </a>
  );
};

const LogoutLink = () => (
  <a className="nav-link port-navbar-link" href="/api/auth/logout">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-box-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
      />
      <path
        fill-rule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
      />
    </svg>
  </a>
);

const Header = ({ user, loading, className }) => {
  const { data } = useGetUser();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={`port-navbar port-default absolute ${className} ${
            width < 768 && isOpen ? "is-open" : "is-close"
          }`}
          dark
          expand="md"
        >
          <NavbarBrand href="/">
            <img
              className="image"
              alt="logo"
              src="/images/lingua.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <span
                className=""
                style={{
                  color: "white",
                }}
              >
                NeoAI
              </span>
            </Nav>

            <Nav className="ms-auto" navbar>
              {!loading && (
                <>
                  {user && (
                    <>
                      <div className="media avatar-box mb-0 d-flex align-items-center">
                        <img className="mr-3" src={data.picture} />
                        <div className="media-body">
                          <h5
                            className="mt-0 mb-0 ms-2 subtitle"
                            style={{ color: "white" }}
                          >{`${data.name}`}</h5>
                        </div>
                      </div>
                      <NavItem className="port-navbar-item">
                        <LogoutLink />
                      </NavItem>
                    </>
                  )}
                  {!user && (
                    <NavItem className="port-navbar-item">
                      <LoginLink />
                    </NavItem>
                  )}
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
