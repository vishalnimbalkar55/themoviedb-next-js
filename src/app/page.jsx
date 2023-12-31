import BgCarouselSlider from "@/components/BgCarouselSlider/BgCarouselSlider";
import styles from "./page.module.scss";
import apiClient, { homeApiService } from "@/utils/apiClient";


export default async function Home() {
  const body = {
    default: "popularity",
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
      <h1>testing styles</h1>
      {
        homeData.items.map((item) => {
          return (<>{item.year}</>)
        })
      }
    </main>
  );
}
