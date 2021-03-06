import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Styling from "../assets/css";
import Prolog from "./prolog";
import Banner from "./banner";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      {/* <Global styles={globalStyles} />  */}
      <Styling />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>
      {/* <Banner /> */}

      {/* Prolog only show in home */}
      {/* <Prolog when={data.link["/"]} /> */}
      
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          {/* <HomePage when={data.link["/"]} /> */}
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <Prolog when={data.link["/"]} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Footer  */}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

// const globalStyles = css``;  Sementara dialihkan ke folder assets/css

const HeadContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

// Prolog web 

const Main = styled.div`
  display: flex;
  justify-content: center;
  // background-image: linear-gradient(
  //   180deg,
  //   rgba(66, 174, 228, 0.1),
  //   rgba(66, 174, 228, 0)
  // );
`;

const FooterContainer = styled.div`
  justify-content: center; 
  display: flex;
  flex-direction: column;
`;
