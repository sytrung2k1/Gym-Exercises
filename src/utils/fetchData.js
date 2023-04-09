export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'f16e8496a5msh40490d566695039p1cbe83jsn14576a7583b6'
    }
};

export const fetchData = async (url, options) => {
    const reponse = await fetch(url, options);
    const data = await reponse.json();

    return data;
}