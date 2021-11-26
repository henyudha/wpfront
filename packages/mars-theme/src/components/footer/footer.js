import { connect, styled } from "frontity";
import Link from "../link";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <FooterMenu>
            <NamaMenu><Link link="/tentang/">tentang kami</Link></NamaMenu>
            <NamaMenu><Link link="/privacy/">privacy</Link></NamaMenu>
            <NamaMenu><Link link="/disclaimer/">disclaimer</Link></NamaMenu>
            <NamaMenu><Link link="/copyright/">copyright</Link></NamaMenu>
            <NamaMenu><Link link="/pedoman-siber/">pedoman siber</Link></NamaMenu>
          {/* &copy; 2021 - TQNN. Seluruh hak cipta dilindungi undang-undang. </p> */}
          </FooterMenu>
      </Container>
    </>
  );
}

export default connect(Footer);

const Container = styled.div`
border-top: 1px solid #cccccc;
color: #666666;
font-size: 12px;
text-align: center;
// box-sizing: border-box;
margin-bottom: 10px 0 24px;
justify-content: space-around;
`;

const FooterMenu = styled.ul`
  max-width: 800px;
  list-style-type: none;
  margin: 10px auto 20px;
  padding: 0 15px;
`;

const NamaMenu = styled.li`
  display: inline;
  margin: 0 10px; 
`;