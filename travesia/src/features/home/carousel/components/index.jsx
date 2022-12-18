import React, {  useEffect, useState,  useCallback, useRef, useMemo  } from "react";
import { useScreenSize } from "../hooks/useScreenSize"
import { chunk, getNextSlide, getPrevSlide, mockedSlides } from "../utils";
import { MOBILE_VIEW, SLIDE_DELAY } from "../constants/index";
import SlidesBar from "./SlidesBar";
import Card from "./Card";
  
  import "./styles.css";
import { ChevronLeft, ChevronRight,} from "@mui/icons-material";
  
  const Slider = () => {
    const { width } = useScreenSize();
    const [currentSlide, setCurrentSlide] = useState(0);
    const isSliderStopped = useRef(false);
    const lastWidth = useRef(width);
  
    const slides = useMemo(() => chunk(mockedSlides, width < MOBILE_VIEW), [
      width
    ]);
  
    const nextSlide = useCallback(
      (e) => {
        if (e) {
          isSliderStopped.current = true;
        }
  
        if (isSliderStopped.current && !e) {
          return;
        }
        setCurrentSlide(getNextSlide(currentSlide, slides.length));
      },
      [setCurrentSlide, currentSlide]
    );
  
    const prevSlide = useCallback(
      (e) => {
        if (e) {
          isSliderStopped.current = true;
        }
        setCurrentSlide(getPrevSlide(currentSlide, slides.length));
      },
      [setCurrentSlide, currentSlide]
    );
  
    const choseSlide = useCallback(
      (e) => {
        isSliderStopped.current = true;
        setCurrentSlide(+e.target.dataset.slidenumber);
      },
      [setCurrentSlide]
    );
  
    useEffect(() => {
      const handler = setTimeout(nextSlide, SLIDE_DELAY);
  
      if (width !== lastWidth.current) {
        setCurrentSlide(0);
        lastWidth.current = width;
        clearTimeout(handler);
      }
  
      if (isSliderStopped.current) {
        clearTimeout(handler);
      }
    }, [nextSlide]);
  
    return (
      <div className="slider">
        <Card slides={slides} currentSlide={currentSlide} />
  
        <div className="absoluteBlock">
          <div className="arrowBlock">
            <ChevronLeft className="arrowWrapper" onClick={prevSlide}>
              <div className="arrow left" />
            </ChevronLeft>
            <ChevronRight className="arrowWrapper" onClick={nextSlide}>
              <div className="arrow right" />
            </ChevronRight>
          </div>
        </div>
  
        <SlidesBar
          slides={slides}
          currentSlide={currentSlide}
          onClick={choseSlide}
        />
      </div>
    );
  };
  
  export default Slider;
  