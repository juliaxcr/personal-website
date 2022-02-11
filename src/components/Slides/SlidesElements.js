import styled from "styled-components";

export const SlideContainer = styled.div`
  color: #9c8d73;
  background: ${({ lightBg }) => (lightBg ? "#F0F0F0" : "#F0F0F0")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SlideWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SlideRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: ${({ imgStart }) =>
  (imgStart ? "-100px" : "100px")};
  margin-right: ${({ imgStart }) =>
  (imgStart ? "50px" : "0px")};
`;

export const TopLine = styled.p`
  color: #8E1E1E;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#000000" : "#000000")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 25px;
  color: ${({ darkText }) => (darkText ? "#000000" : "#000000")};
`;

export const ImgWrap = styled.div`
  max-width: 55px;
  height: 50%;
`;

export const Img = styled.img`
    width: 1500%;
    margin: ${({ imgStart }) =>
      (imgStart ? "50px 10px 100px 0px" : "60px 10px 100px -300px")};
`;

