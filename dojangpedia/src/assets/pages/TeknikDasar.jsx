import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosInstance';

function TeknikDasar() {
    const [Basic, setBasic] = useState([]);
    const [teknikDasar, setTeknikDasar] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeknikDasarData = async () => {
            try {
                const { data: Dataku } = await axiosInstance({
                    url: "/Basic",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setBasic(Dataku);

                const { data: Dataku1 } = await axiosInstance({
                    url: "/detailteknik",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setTeknikDasar(Dataku1);
            } catch (error) {
                setError("Gagal mengambil data, silakan coba lagi: " + error);
                console.error('Error mengambil data:', error);
            }
        };
        fetchTeknikDasarData();
    }, []);

    return (
        <div className="container py-5 text-center" style={{ width: '1000px', margin: '260px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '20px' }}>
            <h1 className="mb-10 text-center text-dark">Teknik Dasar Taekwondo</h1>
            
            <section className="mb-5">
                <p className="lead text-dark">Pengenalan singkat tentang pentingnya menguasai teknik dasar dalam Taekwondo.</p>
            </section>
    
            <section className="mb-5">
                <h2 className="mb-4">Jenis-jenis Teknik Dasar</h2>
                <div className="row justify-content-center">
                    {Basic.map((e, i) => (
                        <div className="col-lg-3 mb-4" key={i}>
                           
                                <div className="card-body"> <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                    <h3 className="card-title">{e.cardTitle}</h3>
                                    <p className="card-text">{e.cardText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    
            <section className="mb-5">
                <h2 className="mb-4">Detail Teknik</h2>
                <div className="row justify-content-center">
                    {teknikDasar.map((e, i) => (
                        <div className="col-lg-3 mb-4" key={i}>
                            <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                <div className="card-body">
                                    <h3 className="card-title">{e.cardTitle}</h3>
                                    <p>
                                        {e.cardText}
                                    </p>
                                    <ul className="list-unstyled">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    
            <section>
                <h2 className="mb-4">Kontes</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10 mb-5">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/UudfGKT75K8"
                                title="Video Teknik Dasar Taekwondo"
                                style={{width: '100%', height: '450px'}}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeknikDasar;