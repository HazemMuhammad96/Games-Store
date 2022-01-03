import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./main.css";

interface Props {

}

function Thumbnail({ src }) {
    return (
        <img src={src} alt="sample" style={{ width: "100%", height: "100%", borderRadius: "5px" }} />
    );
}

export default function DemoCarousel({ }: Props): ReactElement {

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

            >
                <div className='container'>
                    <Slider classNameAnimation="fade-animation" className='slider'>
                        <Slide classNameHidden="hide" classNameVisible="show" index={0} className='slider' >

                            <div className='legend'>
                                <h1>Red Dead Redemption 2</h1>
                                <div className='Price'>
                                    <button className="buyButton">Buy Now</button>
                                    <p>$59.99</p>
                                </div>
                            </div>
                            <div className="shadow"></div>
                            <div className="drop"></div>
                            <Image hasMasterSpinner src="https://api.cdkeybay.com/static/bbc99843f82c0212477c258f.jpg" />
                        </Slide>
                        <Slide classNameHidden="hide" classNameVisible="show" index={1}>
                            <div>
                                <div className='legend'>
                                    <h1>Farcry 6</h1>
                                    <div className='Price'>
                                        <button className="buyButton">Buy Now</button>
                                        <p>$59.99</p>
                                    </div>
                                </div>
                                <div className="shadow"></div>
                                <div className="drop"></div>
                                <Image hasMasterSpinner src="https://compass-ssl.xbox.com/assets/d5/2b/d52b9b34-fd1c-42af-95ec-e42438a9bdba.jpg?n=Far-Cry-6_GLP-Page-Hero-1084_1920x1080.jpg" />
                            </div>
                        </Slide>
                        <Slide classNameHidden="hide" classNameVisible="show" index={2}>
                            <div>
                                <div className='legend'>
                                    <h1>cyberpunk 2077</h1>
                                    <div className='Price'>
                                        <button className="buyButton">Buy Now</button>
                                        <p>$59.99</p>
                                    </div>
                                </div>
                                <div className="shadow"></div>
                                <div className="drop"></div>
                                <Image hasMasterSpinner src="https://static.digit.in/default/47c100f53b09f78a5839bb24e2525adff9bfe705.jpeg" />
                            </div></Slide>
                        <Slide classNameHidden="hide" classNameVisible="show" index={3}>
                            <div>
                                <div className='legend'>
                                    <h1>Neon Abbys</h1>
                                    <div className='Price'>
                                        <button className="buyButton">Buy Now</button>
                                        <p>$59.99</p>
                                    </div>
                                </div>
                                <div className="shadow"></div>
                                <div className="drop"></div>
                                <Image hasMasterSpinner src="https://cdn1.epicgames.com/b0ebefb11a9145488af78f6d2488afff/offer/EGS_NeonAbyss_VeewoGames_S1-2560x1440-a5d38c2d5a422a1c7682082d64343e2b.jpg" />
                            </div></Slide>

                    </Slider>
                    <div className="thumbnail-container">
                        <Dot slide={0} className="thumbnail">
                            <Thumbnail src="https://api.cdkeybay.com/static/bbc99843f82c0212477c258f.jpg" />
                        </Dot>
                        <Dot slide={1} className="thumbnail">
                            <Thumbnail src="https://compass-ssl.xbox.com/assets/d5/2b/d52b9b34-fd1c-42af-95ec-e42438a9bdba.jpg?n=Far-Cry-6_GLP-Page-Hero-1084_1920x1080.jpg" />
                        </Dot>
                        <Dot slide={2} className="thumbnail">
                            <Thumbnail src="https://static.digit.in/default/47c100f53b09f78a5839bb24e2525adff9bfe705.jpeg" />
                        </Dot>
                        <Dot slide={3} className="thumbnail">
                            <Thumbnail src="https://cdn1.epicgames.com/b0ebefb11a9145488af78f6d2488afff/offer/EGS_NeonAbyss_VeewoGames_S1-2560x1440-a5d38c2d5a422a1c7682082d64343e2b.jpg" />
                        </Dot>
                    </div>
                </div>


            </CarouselProvider>


    )

}


