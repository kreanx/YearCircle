import {ISlider} from "./types";
import {SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as Styled from './Slider.styled'
import {ReactComponent as PrevIcon} from '../../assets/psliderPrevIcon.svg';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const Slider: React.FC<ISlider> = ({eventData, currentIndex}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null); // добавляем реф для элемента слайдера
    const [_, setInit] = useState<boolean>(false);
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const currentEvent = eventData[currentIndex - 1]
    const slidesPerView = window.innerWidth < 1000 ? 2 : 3;

    useEffect(() => {
        if (sliderRef.current) {
            gsap.fromTo(sliderRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
        }
    }, [currentEvent]);

    return (
        <div ref={sliderRef} id={'slider'}>
            <Styled.PrevButton disabled={slideIndex === 0} ref={prevRef}><PrevIcon/></Styled.PrevButton>
            <Styled.NextButton disabled={slideIndex === eventData.length - 1 / slidesPerView} ref={nextRef}><PrevIcon/></Styled.NextButton>
            <Styled.CustomSlider
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                    enabled: window.innerWidth < 1000 ? true : false
                }}
                slidesPerView={slidesPerView}
                spaceBetween={window.innerWidth < 1000 ? '25px' : '80px'}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onRealIndexChange={(element: { activeIndex: number }) => setSlideIndex(element.activeIndex)}
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
        </div>
    )
}
