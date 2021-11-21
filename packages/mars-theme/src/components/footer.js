import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <Lines />
        <div>
          Tentang Kami | privacy | disclaimer | copyright | pedoman siber<p>
          &copy; 2021 - TQNN. Seluruh hak cipta dilindungi undang-undang. </p>
          </div>
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
margin-bottom: 24px;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer;
`;

const Lines = styled.hr`
  margin:0 0 8px;
  border:0;
`