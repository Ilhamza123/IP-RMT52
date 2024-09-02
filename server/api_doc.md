# DojangPedia API Documentation

## Models :

tabel_User
- username : string (required)
- email : string, unique (required)
- password : string (required)
- beltId : integer (foreign key ke tabel belt)

### > /homepage

tabel_Homepage 
- title : string (required)
- text : string

### > /belt
tabel belt
- title : string 
- arti : string
- teknik : string
- descripsi : string

### > /basic
tabel basic
- userId : integer (foreign key ke tabel_User)
- beltId : integer (foreign key ke tabel belt)
- cardTitle : string
- cardText : string

tabel detail_teknik
- basicId : integer (foreign key ke tabel basic)
- cardTitle : string
- cardText : string

### Relasi:
=//> 1 User hanya bisa memiliki 1 Belt, tapi 1 Belt bisa dimiliki banyak User
=//> 1 User bisa membuat banyak Homepage, tapi 1 Homepage hanya dimiliki oleh 1 User
=//> 1 User bisa membuat banyak Basic Taekwondo, tapi 1 Basic Taekwondo hanya dibuat oleh 1 User
=//> 1 Belt bisa memiliki banyak Basic Taekwondo, tapi 1 Basic Taekwondo hanya terkait dengan 1 Belt

=//> 1 Basic Taekwondo bisa memiliki banyak Detail Teknik, tapi 1 Detail Teknik hanya terkait dengan 1 Basic Taekwondo


<!-- ### Penjelasan Relasi:
1. User - Belt: Satu User memiliki satu Belt (One-to-One)
   - Tambahkan field 'beltId' ke tabel_User sebagai foreign key ke tabel belt

3. User - Basic: Satu User bisa membuat banyak Basic Taekwondo (One-to-Many)
   - Field 'userId' di tabel basic sebagai foreign key ke tabel_User

4. Belt - Basic: Satu Belt bisa memiliki banyak Basic Taekwondo (One-to-Many)
   - Field 'beltId' di tabel basic sebagai foreign key ke tabel belt

5. Basic - Detail Teknik: Satu Basic Taekwondo bisa memiliki banyak Detail Teknik (One-to-Many)
   - Field 'basicId' di tabel detail_teknik sebagai foreign key ke tabel basic -->


## Endpoints

### 1. User Registration
- **URL**: `/register`
- **Method**: POST
- **Description**: Mendaftarkan pengguna baru
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "newUser": {
        "id": "integer",
        "username": "string",
        "email": "string"
      }
    }
    ```

### 2. User Login
- **URL**: `/login`
- **Method**: POST
- **Description**: Melakukan login pengguna
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "access_token": "string"
    }
    ```

### 3. Google Login
- **URL**: `/google-login`
- **Method**: POST
- **Description**: Melakukan login menggunakan akun Google
- **Request Body**:
  ```json
  {
    "googleToken": "string"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "access_token": "string"
    }
    ```

## Error Responses

### 1. Validation Error
- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "Pesan validasi "
  }
  ```

### 2. Invalid Token
- **Status**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Token tidak valid"
  }
  ```

### 3. Missing Credentials
- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "Email dan password diperlukan"
  }
  ```

### 4. Unauthorized
- **Status**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Email atau password salah"
  }
  ```

### 5. Not Found
- **Status**: 404 Not Found
- **Body**:
  ```json
  {
    "message": "Data tidak ditemukan"
  }
  ```

### 6. Bad Request
- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "Permintaan tidak valid"
  }
  ```

### 7. Forbidden
- **Status**: 403 Forbidden
- **Body**:
  ```json
  {
    "message": "Akses ditolak"
  }
  ```

### 8. Missing Google Token
- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "Google token diperlukan"
  }
  ```

### 9. Internal Server Error
- **Status**: 500 Internal Server Error
- **Body**:
  ```json
  {
    "message": "Terjadi kesalahan internal server"
  }

### 10. Belt not found
- **Status**: 404 Not Found
- **Body**:
  ```json
  {
    "message": "Belt tidak ditemukan"
  }
  ```
