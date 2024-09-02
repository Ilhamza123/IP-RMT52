import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';

const EditFormSabuk = () => {
    const [formData, setFormData] = useState({
        title: '',
        arti: '',
        teknik: '',
        descripsi: '',
        imgUrl: ''
    });
    // console.log(imgUrl,"<<<<<<<<<<<<<<<<<<");
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance({
                url: `/belt/${id}`,
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                data: formData
            });
            navigate('/belt');
        } catch (error) {
            console.error('Error memperbarui data:', error);
            setError('Gagal memperbarui data sabuk');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Data Sabuk</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Judul Sabuk</label>
                    <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="arti" className="form-label">Arti</label>
                    <input type="text" className="form-control" id="arti" name="arti" value={formData.arti} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="teknik" className="form-label">Teknik</label>
                    <input type="text" className="form-control" id="teknik" name="teknik" value={formData.teknik} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripsi" className="form-label">Deskripsi</label>
                    <textarea className="form-control" id="descripsi" name="descripsi" value={formData.descripsi} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="imgUrl" className="form-label">URL Gambar</label>
                    <input type="text" className="form-control" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Perbarui Data</button>
            </form>
        </div>
    );
};

export default EditFormSabuk;