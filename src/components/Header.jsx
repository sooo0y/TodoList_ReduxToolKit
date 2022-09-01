import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <h4>아자아자~!</h4>
      <h4>SY</h4>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;