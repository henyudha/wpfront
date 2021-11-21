import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <Lines />
        <div>Tentang Kami </div>
      </Container>
      <MobileMenu />
    </>
  )
};

export default connect(Footer);

const Container = styled.div`
width: 640px;
border-top: 1px solid #cccccc;
color: #666666;
font-size: 12px;
text-align: center;
max-width: 100%;
box-sizing: border-box;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Lines = styled.hr`
  margin:0 0 10px;
  border:0;
`