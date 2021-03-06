import React from "react";
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  Telegram,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link href="/">Resume</Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}

          <a href="/#contact" className="a_nostyles">
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
