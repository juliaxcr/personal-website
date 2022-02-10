import React from "react";
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  SlideContainer,
  SlideRow,
  SlideWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./SlidesElements";

const Slides = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
  return (
    <>
      <SlideContainer lightBg={lightBg} id={id}>
        <SlideWrapper>
          <SlideRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
              <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column2>
          </SlideRow>
        </SlideWrapper>
      </SlideContainer>
    </>
  );
};

export default Slides;
