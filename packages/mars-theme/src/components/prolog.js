import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./header/menu";


const Prolog = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        {/* <p>Media berita dan informasi ikhwan-akhwat TQN Pontren Suryalaya<br/>serta wawasan ketarekatan</p> */}
        <p>{state.frontity.description}</p>
        
        <ButtonSubs>subscribe</ButtonSubs>
      </Container>
      <MobileMenu />
    </>
  );
};


export default connect(Prolog);

// Prolog web 
const Container = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 20px 16px;
  margin: auto;
  & > p {
    margin: auto;
    font-size: 1.29em;
    font-weight: 200;
    line-height: 1.4em;
    color: #666666;
  }
`;

const ButtonSubs = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 1em;
  color: #fff;
  margin: 20px 0 0;
  padding: 8px 20px;
  border-radius: .35em;
  background: #56dc4c;
  border-color: #56dc4c;
  border: 1px solid transparent;
  &:hover {
    background-color: #2db323;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;

const Title = styled.h1`
  margin: 0 0 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;