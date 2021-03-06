import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Nav />
        <StyledLink link="/">
          {/* <Title>{state.frontity.title}</Title> */}
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
      </Container>
      <MobileMenu />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  // box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid hsl(116, 0%, 80%);
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
