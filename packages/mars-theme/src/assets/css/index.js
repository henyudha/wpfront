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
            font-weight:normal;
            font-display: swap;
          }
          html {
            font-size: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
          }
          body {
            margin: 0;
            font-size: 15px;
            font-weight: 400;
            font-style: normal;
            font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            line-height: 1,153;
            color: hsl(116, 10%, 20%);
            background: #fff;
          }
          p {
            letter-spacing: .005em;
          }
          a, a:visited {
            color: inherit;
            text-decoration: none;
          }
          a:focus {
            font-weight: bold;
          }
          a:-webkit-any-link {
            cursor: pointer;
          }
          h1,h2,h3,h4,h5,h6 {
            margin-top: 0;
            margin-bottom: .2rem;
            font-weight: 600;
          }
          h1 {font-size: 2.5rem;}
          h2 {font-size: 2rem;}
          h3 {font-size: 1.75rem;}
          h4 {font-size: 1.5rem;}
          h5 {font-size: 1.25rem;}
          h6 {font-size: 1.1rem;}
          
          .arab {
            font-family: "UthmanThaha", "Traditional Arabic", sans-serif;
            font-size: 26px;
            font-weight: normal;
            line-height: 2.8rem;
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