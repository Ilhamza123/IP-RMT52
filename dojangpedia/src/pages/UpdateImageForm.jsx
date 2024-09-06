    import React, { useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import axiosInstance from '../../../dojangpedia/src/config/axiosInstance';
    import '../pages/UpdateImageForm.css';
    import Swal from 'sweetalert2';

const UpdateImageForm = () => {
    const { id } = useParams(); // Ambil id dari URL
    const navigate = useNavigate();
    const [newImage, setNewImage] = useState(null);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('spec', newImage); 

        try {
            await axiosInstance({
                url: `/belt/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
                timeout: 10000, // Meningkatkan timeout menjadi 10 detik
            });
            Swal.fire({
                title: 'Berhasil!',
                text: 'Gambar sabuk berhasil diupdate.',
                icon: 'success',
                confirmButtonText: 'Oke'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/belt');
                }
            });
        } catch (error) {
            setError('Gagal mengupdate gambar sabuk.',error);
        }
    };

    return (
        <div className="update-image-form-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="newImage" className="form-label">Pilih Gambar Baru</label>
                    <input
                        type="file"
                        className="form-control"
                        id="newImage"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                {error && <div className="alert alert-danger mb-3">{error}</div>}
                <button type="submit" className="btn btn-primary">Update Gambar</button>
            </form>
        </div>
    );
};

export default UpdateImageForm;
