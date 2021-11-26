import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}: {""}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Editor: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* <Lines /> */}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 624px;
  margin: 10px 0 0;
  padding: 0 15px 30px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: lowercase;
  text-align: center;
  letter-spacing: 0.1em;
  margin: 30px 0 10px;
`;

const Lines = styled.hr`
  margin: 1rem 0;
  border: 0;
  height: 1px;
  background: #cccccc;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f5f5f5),
    color-stop(#cccccc),
    to(#f5f5f5)
  );
  background-image: -webkit-linear-gradient(left, #f5f5f5, #cccccc, #f5f5f5);
  background-image: linear-gradient(to right, var#f5f5f5, #cccccc, #f5f5f5);
`;
