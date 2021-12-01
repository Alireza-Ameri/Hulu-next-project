const API_KEY = process.env.API_KEY;


export default {
    fetchTrending: {
        title:"Trending",
        url: `/Trending/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchTopRated: {
        title:"TopRated",
        url: `/TopRated/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchComedyMovie: {
        title:"ComedyMovie",
        url: `/ComedyMovie/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchRomanceMovie: {
        title:"RomanceMovie",
        url: `/RomanceMovie/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchHonerMovie: {
        title:"HonerMovie",
        url: `/HonerMovie/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchMystery: {
        title:"Mystery",
        url: `/Mystery/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchSciFi: {
        title:"Sci-Fi",
        url: `/SciFi/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchWestern: {
        title:"Western",
        url: `/Western/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchAnimation: {
        title:"Animation",
        url: `/Animation/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchTV: {
        title:"TV",
        url: `/TV/all/week?api_key=${API_KEY}&language=en-Us`
    },
}