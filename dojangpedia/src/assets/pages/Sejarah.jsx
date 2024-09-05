import React from 'react';

function Sejarah() {
    return (
        <div className="container-fluid px-0" style={{ marginTop: '80px' }}>
            <div className="row justify-content-center mx-0">
                <div className="col-12">
                    <div className="bg-white p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                        <h1 className="text-center mb-4 display-4 fw-bold text-primary">Sejarah Taekwondo</h1>
                        
                        <p className="lead text-dark text-center px-3">
                            Taekwondo adalah seni bela diri yang berasal dari Korea. Dikembangkan pada tahun 1940-an dan 1950-an oleh berbagai praktisi seni bela diri Korea, Taekwondo menggabungkan teknik pertarungan dari berbagai seni bela diri tradisional Korea.
                        </p>
                    
                        <h2 className="mt-5 mb-4 text-center">Dua Aliran Utama Taekwondo</h2>
                    
                        <div className="row mt-3 mx-0">
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">1. ITF (International Taekwon-Do Federation)</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Didirikan oleh Jenderal Choi Hong Hi pada tahun 1966</li>
                                            <li className="list-group-item">Lebih fokus pada teknik tradisional dan self-defense</li>
                                            <li className="list-group-item">Menggunakan sistem pola tul</li>
                                            <li className="list-group-item">Menekankan pada kekuatan dan teknik</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #e0e0e0'}}>
                                    <div className="card-body">
                                        <h3 className="card-title text-primary">2. WT (World Taekwondo)</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Didirikan pada tahun 1973</li>
                                            <li className="list-group-item">Diakui sebagai olahraga Olimpiade sejak tahun 2000</li>
                                            <li className="list-group-item">Lebih fokus pada aspek olahraga dan kompetisi</li>
                                            <li className="list-group-item">Menggunakan sistem poomsae</li>
                                            <li className="list-group-item">Menekankan pada kecepatan dan teknik tendangan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sejarah;