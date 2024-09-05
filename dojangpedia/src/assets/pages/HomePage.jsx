import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosInstance';

function HomePage() {
    const [homeData, setHomeData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const { data: Dataku } = await axiosInstance({
                    url: "/Homepage",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setHomeData(Dataku);
            } catch (error) {
                setError("Gagal mengambil data, silakan coba lagi: " + error);
                console.error('Error mengambil data:', error);
            }
        };
        fetchHomeData();
    }, []);
    return (
        <div className="container-fluid px-0">
            <div className="row justify-content-center mx-0">
                <div className="col-10">
                    {/* Hero Section */}
                    <section className="hero-section d-flex align-items-center justify-content-center" style={{ marginTop: '250px' }}>
                        <div className="hero-content text-center bg-white bg-opacity-75 p-4 rounded shadow-sm" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <h1 className="display-10 fw-bold">Temukan Kekuatan Dalam Dirimu</h1>
                            <p className="lead">Mulai Perjalanan Taekwondo-mu Sekarang</p>
                            <a href="#selamat-datang" className="btn btn-primary btn-lg">Mulai Sekarang</a>
                        </div>
                    </section>

                    {/* Pengantar Singkat */}
                    <section id="selamat-datang" className="intro-section text-center mt-5 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                        <div className="bg-white bg-opacity-75 p-4 rounded shadow-sm" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <h2 className="mb-4">Selamat Datang di DojangPedia</h2>
                            <p className="lead text-muted px-3">
                                DojangPedia adalah sumber informasi terlengkap tentang Taekwondo. 
                                Kami bertujuan untuk membantu Anda memahami dan mengembangkan keterampilan Taekwondo Anda.
                            </p>
                            <a href="#highlight-konten" className="btn btn-outline-primary">Pelajari Lebih Lanjut</a>
                        </div>
                    </section>
             
                    {/* Highlight Konten */}
                    <section id="highlight-konten" className="my-10 py-10" style={{ marginTop: '80px', marginBottom: '80px', scrollMarginTop: '100px' }}>
                        <div className="row justify-content-center mx-0">
                            {homeData.map((e, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                        <div className="card-body d-flex flex-column">
                                            <h3 className="card-title text-primary mb-auto">{e.title || 'Memuat...'}</h3>
                                            <p className="card-text mt-3">{e.text || 'Memuat...'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
         
                    {/* Video Pengantar */}
                    <section className="video-section text-center mt-10 d-flex justify-content-center align-items-center">
                        <div className="w-100">
                            <h2 className="mb-4">Pengenalan Taekwondo</h2>
                            <div className="video-container mx-auto" style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '80%' }}>
                                <iframe 
                                    src="https://www.youtube.com/embed/UOrZZM6xau8" 
                                    title="Pengenalan Taekwondo" 
                                    allowFullScreen 
                                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '75%' }}
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    {/* Berita & Event */}
                        <section className="news-events-section mt-2 mb-2">
                        <div className="row justify-content-center mx-0">           
                            <div className="col-md-6 mb-4 d-flex justify-content-center">
                                <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                    <div className="card-body text-center">
                                        <h3 className="card-title text-primary">Berita Terbaru</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Kejuaraan Nasional Taekwondo 2023</li>
                                            <li className="list-group-item">Teknik Baru dalam Poomsae</li>
                                            <li className="list-group-item">Profil Atlet: Juara Olimpiade Taekwondo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 d-flex justify-content-center">
                                <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                    <div className="card-body text-center">
                                        <h3 className="card-title text-primary">Kalender Event</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Workshop Teknik Dasar - 15 Juli 2023</li>
                                            <li className="list-group-item">Turnamen Lokal - 5 Agustus 2023</li>
                                            <li className="list-group-item">Seminar Pelatih - 20 September 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
