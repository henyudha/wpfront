import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import LogoImage from "../../assets/img/logo-horizontal.png";

const HomePage = ({ state }) => {
  return (
    <Container>
      <StyledLink link="/">
        {/* <Title>{state.frontity.title}</Title> */}
        <Logo src={LogoImage} />
      </StyledLink>
      <p>{state.frontity.description}</p>

      <ButtonSubs>
        <Link link="/#">subscribe</Link>
      </ButtonSubs>
      <ButtonSubs>
        <Link link="/#">amaliah</Link>
      </ButtonSubs>
      <ButtonSubs>
        <Link link="/kebajikan">kebajikan</Link>
      </ButtonSubs>
    </Container>
  );
};

export default connect(HomePage);

const Container = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 50px 16px 20px;
  margin: auto;
  & > p {
    margin: auto;
    font-size: 1.29em;
    font-weight: 200;
    line-height: 1.4em;
    color: #666666
`;

const Title = styled.h1`
  margin: 0 0 16px;
`;

const Logo = styled.img`
  max-width: 220px;
  margin: 0 0 16px;
`

const ButtonSubs = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 1em;
  color: #fff;
  margin: 20px 2px 0;
  padding: 8px 14px;
  border-radius: 0.35em;
  background: #56dc4c;
  border: 1px solid #56dc4c;
  &:hover {
    background-color: #2db323;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
