import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';
// impor createSlice redux untuk membuat slice dari state
// import { createSlice } from 'redux';

const Sabuk = () => {
    const [Tekniks, setTekniks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSabukData = async () => {
            try {
                const { data: Dataku } = await axiosInstance({
                    url: "/belt",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setTekniks(Dataku);
            } catch (error) {
                setError("Gagal mengambil data, silakan coba lagi: " + error);
                console.error('Error mengambil data:', error);
            }
        };
        fetchSabukData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axiosInstance({
                url: `/belt/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setTekniks(Tekniks.filter(teknik => teknik.id !== id));
        } catch (error) {
            setError("Gagal menghapus data: " + error);
            console.error('Error menghapus data:', error);
        }
    };

    return (
        <div className="container-fluid py-5 bg-light">
            <h1 className="text-center mb-5 text-primary">Tingkatan Sabuk Taekwondo</h1>
            <div className="row justify-content-center">
                {Tekniks.map((e, i) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={i}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-header">
                                <h3 className="card-title text-center m-0">{e.title}</h3>
                            </div>
                            <div className="card-body">
                                <img src={e.imgUrl} alt={e.title} className="card-img-top mb-3" />
                                <p><strong>Arti:</strong> {e.arti}</p>
                                <p><strong>Teknik:</strong> {e.teknik}</p>
                                <p><strong>Deskripsi:</strong> {e.descripsi}</p>
                                <div className="d-flex justify-content-end mt-3">
                                    <Link to={`/editformsabuk/${e.id}`} className="btn btn-primary me-2">
                                        Edit
                                    </Link>
                                    <Link to={`/updateImageForm/${e.id}`} className="btn btn-info me-2">
                                        Update Image
                                    </Link>
                                    <button onClick={() => handleDelete(e.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
};

export default Sabuk;