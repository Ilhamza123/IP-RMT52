import React from 'react';

function NavbarFooter() {
  return (
    <footer className="site-footer mt-5 bg-dark text-white py-4">
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Informasi Kontak</h4>
            <p>Email: info@dojangpedia.com</p>
            <p>Telepon: (021) 1234-5678</p>
            <p>Alamat: Jl. Taekwondo No. 123, Jakarta</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Media Sosial</h4>
            <div className="social-icons d-flex justify-content-center">
              <a href="#" className="social-icon me-2 text-white">Facebook</a>
              <a href="#" className="social-icon me-2 text-white">Twitter</a>
              <a href="#" className="social-icon me-2 text-white">Instagram</a>
              <a href="#" className="social-icon text-white">LinkedIn</a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Berlangganan Newsletter</h4>
            <form className="newsletter-form">
              <div className="input-group justify-content-center">
                <input type="email" className="form-control" placeholder="Masukkan email Anda" aria-label="Email" />
                <button type="submit" className="btn btn-primary">Langganan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NavbarFooter;