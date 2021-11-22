import React from "react";
import { styled, connect } from "frontity";

const Banner = ({ state }) => {

  return (
    <BannerContent activated={state.theme.activated}>
      Ini bersisi konten banner
    </BannerContent>
  )
}

export default connect(Banner);

const BannerContent = styled.div`
  padding: 10px;
  color: ${props => props.activated === 'on' ? 'red' : 'brown'};
  background: #cccccc;
`;