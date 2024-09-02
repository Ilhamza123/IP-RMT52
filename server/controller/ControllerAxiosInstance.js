const axiosInstances = require('../config/axiosInstance');

class AxiosInstance {
    static async GetRanking(req, res) {
        try {
            console.log('Tunggu masuk dulu broo!!! ke API...');
            const { data } = await axiosInstances({
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '803fb01a2dmsh6dfb4276a435b94p1acd85jsn1e9d14a263f3',
                    'x-rapidapi-host': 'taekwondo_athlete_world_ranking1.p.rapidapi.com'
                }
            });
            console.log('Respon diterima:', data);
            
            // Mengambil hanya 10 data teratas
            const top10Data = data.slice(0, 10);
            
            res.status(200).json(top10Data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = AxiosInstance;