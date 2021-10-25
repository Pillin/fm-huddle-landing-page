import styled from "@emotion/styled";

export const P = styled.p<{ margin?: string }>`
  color: white;
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 400;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 27px;
    text-align: left;
  }
`;

export const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: 600;
  margin: 0px;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 40px;
    line-height: 60px;
    text-align: left;
  }
`;
export const H2 = styled.h2`
font-family: 'Poppins', sans-serif;
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px 0px;
  font-size: 2rem;
`;

export const H3 = styled.h3`
font-family: 'Poppins', sans-serif;
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 0.8em;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 1em;
  }
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
