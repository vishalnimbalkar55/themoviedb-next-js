'use client'
import React from 'react'
import styles from "./LongCarouselSlider.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { PlayIcon, StarIcon } from '@/assets/icon'
import { imageURL } from '@/constant/constants';
import Image from 'next/image';


function LongCarouselSlider({ list }) {
    // console.log("list------", list)
    return (
        <div className={styles.lgCarouselContainer}>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                freeMode={false}

                breakpoints={
                    {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }
                }
                pagination={{
                    clickable: false,
                }}
                navigation={
                    {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                }
                modules={[FreeMode, Navigation]}
                // modules={[FreeMode, Pagination, Navigation]}
                // modules={[FreeMode]}
                className={`mySwiper ${styles.mySwiper}`}
            >
                {list.map((item) => {

                    return (
                        <SwiperSlide className={styles.cardBody}>

                            <div className={styles.cardPoster}>
                                <Image

                                    src={`${imageURL}/${item.poster_path}`}
                                    width={600}
                                    height={900}
                                    alt="Picture of the author"
                                    loading="lazy"
                                />

                            </div>
                            <div className={styles.cardTitle}>{item.original_title}</div>
                            <div className={styles.cardRating}><StarIcon /> {item.vote_average}</div>
                            <div className={styles.cardDate}>{item.release_date}</div>
                        </SwiperSlide>
                    )
                })}

                <div className={`swiper-button-prev ${styles.swiperPrev}`}></div>
                <div className={`swiper-button-next ${styles.swiperNext}`}></div>
            </Swiper></div>
    )
}

export default LongCarouselSlider