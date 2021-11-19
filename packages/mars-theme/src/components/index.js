import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Menu from "./menu";
import Prolog from "./prolog";

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
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Prolog only shoe home */}
      <Prolog when={data.isHome} />
      
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @font-face{
    font-family:'UthmanThaha';
    src:url('https://kangismet.github.io/fonts/Uthman-Thaha.eot');
    src:url('https://kangismet.github.io/fonts/Uthman-Thaha.eot?#iefix') format('embedded-opentype'),
    url('https://kangismet.github.io/fonts/Uthman-Thaha.ttf') format('truetype');
    font-weight:400;
    font-weight:normal;
    font-display: swap;
  }
  html {
    font-size: 100%;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #051504;
    background-color: #fff;
    line-height: 1,15;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
  }
  p {
    font-weight: 300;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: .2rem;
    font-weight: 700;
  }
  h1 {font-size: 2.5rem;}
  h2 {font-size: 2rem;}
  h3 {font-size: 1.75rem;}
  h4 {font-size: 1.5rem;}
  h5 {font-size: 1.25rem;}
  h6 {font-size: 1rem;}
  
  .arab {
    font-family: "UthmanThaha", "Traditional Arabic", sans-serif;
    font-size: 1.7rem;
    font-weight: normal;
    line-height: 2.7rem;
    margin-bottom: 1rem;
    text-align: right;
    direction: rtl;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
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
