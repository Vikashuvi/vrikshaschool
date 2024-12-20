import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const VisionWrapper = styled.div`
  height: 300vh; // Adjust this value as needed for desired scroll length
  position: relative;
`;

const VisionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 20;
`;

const VisionText = styled.h1`
  font-size: 20vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  white-space: nowrap;
  transform: scaleY(1.2);
  position: absolute;
  opacity: ${(props) =>
    1 - Math.min(1, props.progress * 2)}; // Adjusted for faster darkening
  transition: opacity 0.3s ease;
  z-index: 20;
`;

const VisionParagraph = styled.p`
  margin-top: 10rem;
  position: absolute;
  left: 10%;
  right: 10%;
  transform: translateY(${(props) => 50 - props.progress * 100}%);
  font-size: 3vw;
  color: white;
  max-width: 80%;
  text-align: left;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 5vw;
    left: 5%;
    right: 5%;
    max-width: 90%;
    line-height: 1.4;
  }
`;

const Word = styled.span`
  opacity: ${(props) =>
    props.visible ? 0.9 : 0.2}; // Increased opacity for visible words
  transition: opacity 0.3s ease;
`;

const Vision = () => {
  const [progress, setProgress] = useState(0);
  const [visibleWords, setVisibleWords] = useState(0);
  const paragraphRef = useRef(null);

  const paragraphContent =
    "Every kid is unique—and so is their path to success. Vriksha Global School redefines education by empowering every child to discover their unique potential. We believe in learning beyond classrooms, embracing experiences that foster creativity, critical thinking, and real-world skills. Our holistic approach ensures that sports, arts, and other creative pursuits are valued equally alongside STEM disciplines, allowing students to explore diverse careers and passions. By nurturing each child's individuality, we create an environment where every learner can thrive, follow their dreams, and contribute meaningfully to the world.";

  const words = paragraphContent.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const visionElement = document.getElementById("vision-wrapper");
      const visionRect = visionElement.getBoundingClientRect();
      const visionStart = visionRect.top + window.scrollY + 200;
      const visionHeight = visionRect.height;

      const paragraphHeight = paragraphRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollDistance =
        visionHeight - windowHeight * 0.75 - paragraphHeight / 2;
      const scrollProgress = (scrollPosition - visionStart) / scrollDistance;

      setProgress(Math.max(0, Math.min(scrollProgress, 1)));
      setVisibleWords(Math.floor(words.length * scrollProgress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <VisionWrapper id="vision-wrapper">
      <VisionContainer>
        {/* <VisionText progress={progress}>
          <span className=" bg-whitelight text-transparent bg-clip-text">
            n-Vision-v
          </span>
        </VisionText> */}
        <VisionParagraph ref={paragraphRef} progress={progress}>
          {words.map((word, index) => (
            <Word key={index} visible={index < visibleWords}>
              {word}{" "}
            </Word>
          ))}
        </VisionParagraph>
      </VisionContainer>
    </VisionWrapper>
  );
};

export default Vision;
