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

const Slides = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, description3, img, alt}) => {
  return (
    <>
      <SlideContainer lightBg={lightBg} id={id}>
        <SlideWrapper>
          <SlideRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
              <Img src={img} alt={alt} imgStart={imgStart}/>
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper imgStart={imgStart}>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
              </TextWrapper>
            </Column2>
          </SlideRow>
        </SlideWrapper>
      </SlideContainer>
    </>
  );
};

export default Slides;
