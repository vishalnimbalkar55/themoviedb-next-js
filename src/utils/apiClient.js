export const apiClient = async (props) => {
  const { params, year } = props;
  // console.log("props", props);
  // console.log(
  //   "params----------------",
  //   `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&${params}`
  // );
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&${params}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "your-rapidapi-key",
          "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    // console.log("data---------", data);

    if (year) {
      // console.log("data---", data);
      return { ...data, year: year };
    }
    return data;
  } catch (err) {
    // console.log(err);
    return null;
  }
};

export const homeApiService = async ({ body }) => {
  const homeData = {};
  const years = [];
  console.log("body ---------------------", body);
  // Generate the list of years
  for (let year = body.startYear; year <= body.endYear; year++) {
    years.push(year);
  }
  // console.log("years-----", years);

  const popularMovie = await apiClient({
    params: `&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${
      body.genres != 0 ? `&with_genres=${body.genres}` : ``
    }`,
  }).then((values) => {
    // console.log("popularMovie-------------------------", values.results);
    let fiveItem = values.results ? values.results.slice(0, 5) : [];
    // console.log("fiveItem------------", fiveItem);
    homeData["popularMovie"] = fiveItem;
  });

  const data = [];

  years.map(async (year) => {
    // console.log("year----------", year);
    const params = `sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100${
      body.genres != 0 ? `&with_genres=${body.genres}` : ``
    }`;
    const temp = apiClient({ params, year });

    data.push(temp);
  });

  await Promise.all(data).then((values) => {
    homeData["items"] = values;
  });
  return homeData;
};

// export homeApiService;
