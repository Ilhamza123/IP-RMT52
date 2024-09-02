const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://taekwondo_athlete_world_ranking1.p.rapidapi.com/GET_U-58_ATHLETE_RANKING'
});

module.exports = axiosInstance;


