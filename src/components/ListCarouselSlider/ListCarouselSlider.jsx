import React from 'react'
import LongCarouselSlider from '../LongCarouselSlider/LongCarouselSlider'
import styles from "./ListCarouselSlider.module.scss"

function ListCarouselSlider({ movieList }) {
    // console.log("movieList----------", movieList)
    return (
        <div className={styles.listCarouselContainer}>
            <h3>{movieList.year}</h3>
            <LongCarouselSlider list={movieList.results} />
        </div>
    )
}

export default ListCarouselSlider