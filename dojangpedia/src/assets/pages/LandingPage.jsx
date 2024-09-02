import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="container-fluid px-4">

            <div className="row min-vh-100 align-items-center" style={{ paddingTop: '100px' }}>
                <div className="col-md-5 text-center text-md-start p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
                    <h1 className="display-4 fw-bold mb-2 text-dark">Selamat Datang di DojangPedia</h1>
                    <p className="lead mb-4 text-dark">Temukan dunia Taekwondo melalui informasi lengkap, teknik dasar, dan filosofi seni bela diri Korea ini.</p>
                    <Link to="/register" className="btn btn-primary btn-lg shadow-lg rounded-pill px-4 py-2 fw-bold">
                        <span className="me-2">🥋</span>
                        Join Yuk
                        <span className="ms-2">🥋</span>
                    </Link>
                </div>
                <div className="col-md-7 d-none d-md-block text-center">
                    <img src="/src/assets/pages/assets/tekundu.png" alt="Taekwondo" className="img-fluid shadow-lg" style={{ transition: 'box-shadow 0.3s ease-in-out', maxWidth: '90%' }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)'} />
                </div>
            </div>

            <div className="row bg-light py-5 mx-0 mt-5">
                <div className="col-md-4 text-center mb-5 mb-md-0 px-4">
                    <div className="card shadow-sm h-100 transition-shadow" style={{ transition: 'box-shadow 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)'}>
                        <div className="card-body">
                            <i className="bi bi-book fs-1 text-primary mb-4"></i>
                            <h3 className="mb-3">Pelajari Sejarah</h3>
                            <p>Telusuri asal-usul dan perkembangan Taekwondo.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-5 mb-md-0 px-4">
                    <div className="card shadow-sm h-100 transition-shadow" style={{ transition: 'box-shadow 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)'}>
                        <div className="card-body">
                            <i className="bi bi-person-arms-up fs-1 text-primary mb-4"></i>
                            <h3 className="mb-3">Teknik Dasar</h3>
                            <p>Pelajari gerakan-gerakan fundamental Taekwondo.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center px-4">
                    <div className="card shadow-sm h-100 transition-shadow" style={{ transition: 'box-shadow 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)'}>
                        <div className="card-body">
                            <i className="bi bi-award fs-1 text-primary mb-4"></i>
                            <h3 className="mb-3">Tingkatan Sabuk</h3>
                            <p>Pahami arti di balik setiap warna sabuk.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-5 mx-0 mt-5" style={{ backgroundColor: 'rgba(245, 245, 245, 0.9)', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div className="col-12 text-center">
                    <h2 className="display-4 fw-bold mb-4" style={{ color: '#333' }}>Mulai Perjalanan Taekwondo Anda</h2>
                    <p className="lead mb-4" style={{ color: '#555' }}>Bergabunglah dengan komunitas kami dan tingkatkan keterampilan bela diri Anda.</p>
                    <Link className="btn btn-primary btn-lg shadow-lg rounded-pill px-4 py-2 fw-bold text-uppercase" style={{ transition: 'all 0.3s' }}>
                        Jelajahi Sekarang
                    </Link>
                </div>
            </div>
                </div>
    );
};

export default LandingPage;