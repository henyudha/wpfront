import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 * It renders the navigation links
 */

/* legacy menu default from mars-theme */
// const Nav = ({ state }) => (
//   <NavContainer>
//     {state.theme.menu.map(([name, link]) => {
//       // Check if the link matched the current page url
//       const data = state.source.get(state.router.link);
//       const isCurrentPage = data.route === link;

//       return (
//         <NavItem key={name}>
//           {/* If link url is the current page, add `aria-current` for a11y */}
//           <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
//             {name}
//           </Link>
//         </NavItem>
//       );
//     })}
//   </NavContainer>
// );

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // console.log('ITEMS:', items)
  return (
    <NavContainer>
      {items.map((item) => {
          return (
            <NavItem key={item.ID}>
              <Link link={item.url}>{item.title}</Link>
            </NavItem>
          );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  text-transform: lowercase;
  box-sizing: border-box;
  padding: 0 24px;
  justify-content: center;
  margin: 10px 0 0;
  overflow-x: auto;
  // border-bottom: 1px solid hsl(116, 0%, 80%);

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 12px 6px;
  font-size: 1.1em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    // border-bottom: 2px solid;
    // border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
        font-weight: bold;
      border-bottom-color: #051504; 
    }
  }


  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

/* Tambahan untuk menu child */
// const NavItemWithChild = styled.div`
//   background: blue;
// `;

// const ChildMenu = styled.div`
//   left: 0;
//   background: blue;
//   width: 100%;
//   z-index: 1;
// `;