import styled, { css } from "styled-components";

export const FontColor = "#fff";

export const ButtonStyles = css`
  border-radius: 0px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  letter-spacing: 2px;
  border-bottom: 4px solid ${FontColor};
  padding-bottom: 4px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;
