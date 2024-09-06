# DojangPedia API Documentation

## Models:

### 1. tabel_User
- username: string (required)
- email: string, unique (required)
- password: string (required)
- beltId: integer (foreign key ke tabel belt)

### 2. tabel_Homepage
- title: string (required)
- text: string

### 3. tabel_belt
- title: string
- arti: string
- teknik: string
- descripsi: string

### 4. tabel_basic
- userId: integer (foreign key ke tabel_User)
- beltId: integer (foreign key ke tabel belt)
- cardTitle: string
- cardText: string

### 5. tabel_detail_teknik
- basicId: integer (foreign key ke tabel basic)
- cardTitle: string
- cardText: string

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

### 4. Get Homepage
- **URL**: `/homepage`
- **Method**: GET
- **Description**: Mengambil semua homepage
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    [
      {
        "title": "string",
        "text": "string"
      }
    ]
    ```

### 5. Create Homepage
- **URL**: `/homepage`
- **Method**: POST
- **Description**: Membuat homepage baru
- **Request Body**:
  ```json
  {
    "title": "string",
    "text": "string"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "id": "integer",
      "title": "string",
      "text": "string"
    }
    ```

### 6. Update Homepage
- **URL**: `/homepage/:id`
- **Method**: PUT
- **Description**: Mengupdate homepage yang sudah ada
- **Request Body**:
  ```json
  {
    "title": "string",
    "text": "string"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "id": "integer",
      "title": "string",
      "text": "string"
    }
    ```

### 7. Delete Homepage
- **URL**: `/homepage/:id`
- **Method**: DELETE
- **Description**: Menghapus homepage yang sudah ada
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "string"
    }
    ```

### 8. Get Belt
- **URL**: `/belt`
- **Method**: GET
- **Description**: Mengambil semua sabuk
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    [
      {
        "title": "string",
        "arti": "string",
        "teknik": "string",
        "descripsi": "string"
      }
    ]
    ```

### 9. Create Belt
- **URL**: `/belt`
- **Method**: POST
- **Description**: Membuat sabuk baru
- **Request Body**:
  ```json
  {
    "title": "string",
    "arti": "string",
    "teknik": "string",
    "descripsi": "string"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "id": "integer",
      "title": "string",
      "arti": "string",
      "teknik": "string",
      "descripsi": "string"
    }
    ```

### 10. Update Belt
- **URL**: `/belt/:id`
- **Method**: PUT
- **Description**: Mengupdate sabuk yang sudah ada
- **Request Body**:
  ```json
  {
    "title": "string",
    "arti": "string",
    "teknik": "string",
    "descripsi": "string"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "id": "integer",
      "title": "string",
      "arti": "string",
      "teknik": "string",
      "descripsi": "string"
    }
    ```

### 11. Delete Belt
- **URL**: `/belt/:id`
- **Method**: DELETE
- **Description**: Menghapus sabuk yang sudah ada
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Sabuk berhasil dihapus"
    }
    ```

### 12. Get Basic
- **URL**: `/basic`
- **Method**: GET
- **Description**: Mengambil semua basic
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    [
      {
        "cardTitle": "string",
        "cardText": "string",
        "UserId": "integer",
        "BeltId": "integer"
      }
    ]
    ```

### 13. Create Basic
- **URL**: `/basic`
- **Method**: POST
- **Description**: Membuat basic baru
- **Request Body**:
  ```json
  {
    "cardTitle": "string",
    "cardText": "string",
    "UserId": "integer",
    "BeltId": "integer"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "id": "integer",
      "cardTitle": "string",
      "cardText": "string",
      "UserId": "integer",
      "BeltId": "integer"
    }
    ```

### 14. Update Basic
- **URL**: `/basic/:id`
- **Method**: PUT
- **Description**: Mengupdate basic yang sudah ada
- **Request Body**:
  ```json
  {
    "cardTitle": "string",
    "cardText": "string",
    "UserId": "integer",
    "BeltId": "integer"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "id": "integer",
      "cardTitle": "string",
      "cardText": "string",
      "UserId": "integer",
      "BeltId": "integer"
    }
    ```

### 15. Delete Basic
- **URL**: `/basic/:id`
- **Method**: DELETE
- **Description**: Menghapus basic yang sudah ada
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Basic berhasil dihapus"
    }
    ```

### 16. Get Detail Teknik
- **URL**: `/detailteknik`
- **Method**: GET
- **Description**: Mengambil semua detail teknik
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    [
      {
        "cardTitle": "string",
        "cardText": "string",
        "BasicId": "integer"
      }
    ]
    ```
    

### 17. Create Detail Teknik
- **URL**: `/detailteknik`
- **Method**: POST
- **Description**: Membuat detail teknik baru
- **Request Body**:
  ```json
  {
    "cardTitle": "string",
    "cardText": "string",
    "BasicId": "integer"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "id": "integer",
      "cardTitle": "string",
      "cardText": "string",
      "BasicId": "integer"
    }
    ```
### 18. Update Detail Teknik
- **URL**: `/detailteknik/:id`
- **Method**: PUT
- **Description**: Mengupdate detail teknik yang sudah ada
- **Request Body**:
  ```json
  {
    "cardTitle": "string",
    "cardText": "string",
    "BasicId": "integer"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "id": "integer",
      "cardTitle": "string",
      "cardText": "string",
      "BasicId": "integer"
    }
    ```

### 19. Delete Detail Teknik
- **URL**: `/detailteknik/:id`
- **Method**: DELETE
- **Description**: Menghapus detail teknik yang sudah ada
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Detail teknik berhasil dihapus"
    }
    ```

    

## Error Responses
### 1. SequelizeValidationError
- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "Pesan validasi"
  }
  ```

### 2. JsonWebTokenError
- **Status**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Token tidak valid"
  }
  ```

### 3. CredentialsRequired
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

### 5. NotFound
- **Status**: 404 Not Found
- **Body**:
  ```json
  {
    "message": "Data tidak ditemukan"
  }
  ```

### 6.BadRequest
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

### 8. missingGoogleToken
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
  ```

### 10. Belt Not Found
- **Status**: 404 Not Found
- **Body**:
  ```json
  {
    "message": "Belt tidak ditemukan"
  }
  ```  
