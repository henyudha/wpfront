import { Global, css } from "frontity";

const Styling = () => {
  return (
    <>
      <Global
        styles={css`
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
          body {margin: 0;}
          p {
            font-weight: 300;
            letter-spacing: .01rem;
          }
          a, a:visited {
            color: inherit;
            text-decoration: none;
          }
          h1,h2,h3,h4,h5,h6 {
            margin-top: 0;
            margin-bottom: .2rem;
            font-weight: 700;
            letter-spacing: .01rem;
          }
          h1 {font-size: 2.5rem;}
          h2 {font-size: 2rem;}
          h3 {font-size: 1.75rem;}
          h4 {font-size: 1.5rem;}
          h5 {font-size: 1.25rem;}
          h6 {font-size: 1.05rem;}
          
          .arab {
            font-family: "UthmanThaha", "Traditional Arabic", sans-serif;
            font-size: 1.6rem;
            font-weight: normal;
            line-height: 2.7rem;
            margin-bottom: 1rem;
            text-align: right;
            direction: rtl;
          }
        `}
      />
    </>
  )
}

export default Styling;