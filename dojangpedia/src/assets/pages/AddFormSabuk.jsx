import React, { useState } from 'react';
import axiosInstance from '../../config/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddFormSabuk = () => {
    const [formData, setFormData] = useState({
        title: '',
        arti: '',
        teknik: '',
        descripsi: '',
        imgUrl: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance({
                url: "/Belt",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                data: formData
            });
            setFormData({ title: '', arti: '', teknik: '', descripsi: '', imgUrl: '' });
            Swal.fire({
                title: 'Berhasil!',
                text: 'Data sabuk berhasil ditambahkan.',
                icon: 'success',
                confirmButtonText: 'Oke'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/belt');
                }
            });
        } catch (error) {
            console.error('Error menambahkan data:', error);
            alert('Gagal menambahkan data sabuk');
        }
    };

    return (
        <div className="container mt-10">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-3  text-center">Tambah Data Sabuk</h2>
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
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Tambah Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFormSabuk;
