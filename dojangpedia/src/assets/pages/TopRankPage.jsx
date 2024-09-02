import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosInstance';

function TopRankPage() {
    const [atlet, setAtlet] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopRankData = async () => {
            try {
                const { data: DataAtlet } = await axiosInstance({
                    url: "/TopRanking",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setAtlet(DataAtlet);
            } catch (error) {
                setError("Gagal mengambil data, silakan coba lagi: " + error);
                console.error('Error mengambil data:', error);
            }
        };
        fetchTopRankData();
    }, []);

    return (
        <div className="container-fluid py-5 bg-light">
            <h1 className="text-center mb-5 text-primary">Peringkat Teratas Atlet Taekwondo</h1>
            <div className="row justify-content-center">
                {atlet.map((e, i) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={i}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title text-center m-0">Peringkat {e.athlete_Rank}</h3>
                            </div>
                            <div className="card-body">
                                <h4 className="text-center mb-3">{e.athlete_name}</h4>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>GAL</th>
                                            <td>{e.athlete_GAL}</td>
                                        </tr>
                                        <tr>
                                            <th>Negara</th>
                                            <td>{e.athlete_Country}</td>
                                        </tr>
                                        <tr>
                                            <th>Poin</th>
                                            <td>{e.athlete_Points}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRankPage
