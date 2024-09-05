import React, { useEffect, useState } from 'react';
import axiosInstance from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Import Swal untuk menggunakan sweetalert2

function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
 

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axiosInstance({
                url: "/login",
                method: "POST",
                data: {
                    email,
                    password,
                },
            });
            localStorage.setItem("access_token", data.access_token);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Login!',
                text: 'Selamat datang di Dojangpedia!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/homepage');
                }
            });
        } catch (error) {
            setError("Login gagal, periksa kembali email dan password Anda");
            console.log(error);
        }
    };

    
// jalan ketika ada user yang login 
  async function handleCredentialResponse({credential}) {
    try {

      console.log("Encoded JWT ID token: " + credential);

      const {data} = await axiosInstance({
        method: "POST",
        url: "/google-login",
        data: {
          googleToken: credential
        }
      })

      console.log(data);
      
      localStorage.setItem("access_token", data.access_token);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Login dengan Google!',
        text: 'Selamat datang di Dojangpedia!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/homepage');
        }
      });
    } catch (error) {
      console.log(error);
    }
      
    }

    useEffect(() => {
      google.accounts.id.initialize({
        client_id: "69823642297-sl51mkg70te7enjl7pojbrl5if0fol48.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      //sign in with google button
      google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      //sign in with google promt // one tap sign in
      google.accounts.id.prompt(); // also display the One Tap dialog
    },[])
    
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row justify-content-center" style={{width: '10000px'}}>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img src="/assets/taekwondo.png" alt="Taekwondo" className="img-fluid" style={{width: '1000px'}} />
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h2 className="card-title text-center mb-4">Masuk</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="inputEmail" className="form-label">Alamat Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Masuk</button>
                  </form>
                  <div id="google-login-button" className="d-flex justify-content-center mt-3"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img src="/assets/taekwondo1.png" alt="Taekwondo" className="img-fluid" style={{width: '1000px'}} />
            </div>
          </div>
        </div>
    );
};

export default LoginUser;