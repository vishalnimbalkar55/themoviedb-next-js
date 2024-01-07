import BgCarouselSlider from "@/components/BgCarouselSlider/BgCarouselSlider";
import styles from "../page.module.scss";
import apiClient, { homeApiService } from "@/utils/apiClient";
import ListCarouselSlider from "@/components/ListCarouselSlider/ListCarouselSlider";
import { genresList } from "@/constant/constants";


export default async function page({
    params,
    searchParams,
}) {
    console.log("params--------------", params)
    console.log("searchParams--------------", searchParams)

    const genre = genresList.filter(item => item.name == params.genres ? params.genres : 0)

    console.log("genre-----------", genre)

    const body = {
        default: "popularity",
        genres: genre.length > 0 ? genre[0].id : 0,
        timeline: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
        startYear: 2012,
        endYear: 2023
    }

    // const data = await apiClient('sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100')
    const homeData = await homeApiService({ body })
    // console.log("homeData--------", homeData)
    return (
        <main className={` globalSectionWrapper ${styles.main}`}>
            <BgCarouselSlider data={homeData.popularMovie} />

            <section className={styles.yearListing}>
                {
                    homeData.items.map((item) => {
                        // console.log("item---------", item)
                        return (<>
                            <ListCarouselSlider movieList={item} /></>)
                    })
                }
            </section>

        </main>
    );
}
