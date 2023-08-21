import styled from "styled-components";

export const HomeCointainer = styled.div`
  background-color: #181820;
  main {
    width: 100vw;
    max-width: 100%;
    background-color: #181820;
    min-height: 100%;
  }

  button,
  input {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  button:focus {
    outline: none !important;
  }
`;
