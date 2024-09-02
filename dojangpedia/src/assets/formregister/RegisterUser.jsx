import React, { useState } from 'react';
import axiosInstance from '../../config/axiosInstance';

function RegisterUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      
      await axiosInstance({
        url: "/Register",
        method: "POST",
        data: {
          username,
          email,
          password
        },
      });
      console.log('Registrasi berhasil:');
      setSuccess('Berhasil mendaftar!');
      setError('');
  
      // Redirect ke halaman login atau dashboard
    } catch (error) {
      setError(error.response.data.message)
      setSuccess('');
      console.error('Registrasi gagal:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center" style={{width: '10000px'}}>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src="/src/assets/pages/assets/taekwondo.png" alt="Taekwondo" className="img-fluid" style={{width: '1000px'}} />
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Daftar</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="inputName" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">Alamat Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="inputEmail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">Kata Sandi</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Daftar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src="/src/assets/pages/assets/taekwondo1.png" alt="Taekwondo" className="img-fluid" style={{width: '1000px'}} />
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;