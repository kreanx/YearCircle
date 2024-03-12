import {ISlider} from "./types";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as Styled from './Slider.styled'
import {ReactComponent as PrevIcon} from '../../assets/psliderPrevIcon.svg';
import {useRef, useState} from "react";

export const Slider: React.FC<ISlider> = ({eventData, currentIndex}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState<boolean>(false);
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const currentEvent = eventData[currentIndex - 1]
    const slidesPerView = 3

    return (
        <>
            <Styled.PrevButton disabled={slideIndex === 0} ref={prevRef}><PrevIcon/></Styled.PrevButton>
            <Styled.NextButton disabled={slideIndex === eventData.length - 1 / slidesPerView} ref={nextRef}><PrevIcon/></Styled.NextButton>
            <Styled.CustomSlider
                modules={[Pagination, Navigation]}
                slidesPerView={slidesPerView}
                spaceBetween={'80px'}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onRealIndexChange={(element: any) => setSlideIndex(element.activeIndex)}
                onInit={() => setInit(true)}
            >
                {currentEvent.news.map((item, i: number) => {
                    return (
                        <SwiperSlide key={i}>
                            <Styled.SlideWrapper>
                                <Styled.SlideYear>{item.year}</Styled.SlideYear>
                                <Styled.SlideDescription>{item.description}</Styled.SlideDescription>
                            </Styled.SlideWrapper>
                        </SwiperSlide>
                    )
                })}
            </Styled.CustomSlider>
        </>
    )
}
