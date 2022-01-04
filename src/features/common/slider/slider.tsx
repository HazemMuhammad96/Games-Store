import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./main.css";
import { useNavigate } from 'react-router-dom';

interface Props {
    orientation?: "horizontal" | "vertical";
    images?: any;
}

function Thumbnail({ src }) {
    return (
        <img src={src} alt="sample" />
    );
}

export default function Carousel({ orientation, images }: Props): ReactElement {

    const navigate = useNavigate();
    

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={250}
            totalSlides={4}
            isIntrinsicHeight
            infinite
            interval={2500}
            isPlaying
            touchEnabled={false}
            dragEnabled={false}
            className='carousel'
        >
            <div className={`container ${orientation ?? "vertical"}`}>
                <Slider classNameAnimation="fade-animation" className='slider'>
                    {
                        images?.map((it, i) => (
                            <Slide classNameHidden="hide" classNameVisible="show" index={i} className='slider' >

                                <div className='legend'>
                                    {it.name && <>
                                        <h2 className='name'>{it.name }</h2>
                                        <div className='Price'>
                                            <button className="buyButton"
                                                onClick={() => { 
                                                    navigate("/browse/" + it._id)

                                                }}
                                            >See More</button>
                                            <p>${it.price}</p>
                                        </div>
                                    </>}
                                </div>
                                <div className="shadow"></div>
                                <div className="drop"></div>
                                <Image hasMasterSpinner src={it.image} />
                            </Slide>
                        ))
                    }
                </Slider>
                <div className="thumbnail-container">
                    {
                        images?.map((it, i) => (
                            <Dot key={i} slide={i} className="thumbnail">
                                <Thumbnail src={it.image} />
                            </Dot>
                        ))
                    }
                </div>
            </div>


        </CarouselProvider>


    )

}


