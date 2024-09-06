import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLogOut() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('access_token');
        // Arahkan pengguna ke halaman login
        navigate('/login');
    };

    return (
        <button 
            className="btn btn-danger" 
            onClick={handleLogout}
        >
            Keluar
        </button>
    );
}

export default ButtonLogOut;