'use client'

import React from 'react'
import "./BgCarouselSlider.scss"
import { imageURL } from '@/constant/constants'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { PlayIcon, StarIcon } from '@/assets/icon'

// Import Swiper styles

function BgCarouselSlider({ data }) {
    console.log("data", data)
    return (
        <div className="carousel">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation

                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    data.map((item, index) => {

                        return (
                            <SwiperSlide className="slides" >

                                {/* <Image
                                    className="poster"
                                    src={`${imageURL}/${item.poster_path}`}
                                    width={1152}
                                    height={864}
                                    alt="Picture of the author"
                                    loading="lazy"
                                /> */}

                                <div className='onPosterDetails'>
                                    <div className='movie-detail'>
                                        <h1>{item.original_title}</h1>
                                        <p>{item.overview}</p>
                                    </div>
                                    <div className='other-details'>
                                        <a> <PlayIcon /> View</a>
                                        <div className='rating'><StarIcon /> <span>{item.vote_average}</span></div>
                                    </div>
                                </div>


                                <div className="backdrop">
                                    <div className='backdrop-mask'></div>
                                    <Image

                                        src={`${imageURL}/${item.backdrop_path}`}
                                        width={960}
                                        height={540}
                                        alt="Picture of the author"
                                        loading="lazy"
                                    />
                                </div>
                                {/* {index} */}
                                {/* <img src={`${imageURL}/${item.backdrop_path}`}></img> */}
                                {/* <img src={`${imageURL}/${item.poster_path}`}></img> */}
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>


        </div>


    )
}

export default BgCarouselSlider