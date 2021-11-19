import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Footer = ({ state }) => {
  return (
    <>
      <Nav />
    </>
  )
};

export default connect(Footer);