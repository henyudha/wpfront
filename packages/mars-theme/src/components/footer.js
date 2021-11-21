import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <hr />
        <div>Footer</div>
      </Container>
      <MobileMenu />
    </>
  )
};

export default connect(Footer);

const Container = styled.div`
width: 640px;
border-top: 1px solid #cccccc;
text-align: center;
max-width: 100%;
box-sizing: border-box;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;