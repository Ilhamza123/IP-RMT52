


function errorHandler(err, req, res, next) {
  console.error(err);

  let status = 500;
  let message = "Terjadi kesalahan internal server";

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "JsonWebTokenError":
      status = 401;
      message = "Token tidak valid"
      break;
    case "CredentialsRequired":
      status = 400;
      message = "Email dan password diperlukan";
      break;
    case "unauthorized":
      status = 401;
      message = "Email atau password salah";
      break;
    case "NotFound":
      status = 404;
      message = err.message || "Data tidak ditemukan";
      break;
    case "BadRequest":
      status = 400;
      message = err.message || "Permintaan tidak valid";
      break;
    case "Forbidden":
      status = 403;
      message = "Akses ditolak";
      break;
    case "missingGoogleToken":
      status = 400;
      message = "Google token diperlukan";
      break;
    case "belt not found":
      status = 404;
      message = "Belt tidak ditemukan";
      break;

  }

  res.status(status).json({ message });
}

module.exports = errorHandler;

