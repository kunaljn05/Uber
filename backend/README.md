# User Registration API

## Overview

This API allows users to register by providing their first name, last name, email, and password. Upon successful registration, a JSON Web Token (JWT) is returned along with the user details.

## Endpoint

### POST /users/register

Registers a new user.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

{ "token":
"your_jwt_token",
"user":
{ "\_id": "user_id",
"fullname": { "firstname": "John", "lastname": "Doe" },
"email": "john.doe@example.com",
"socketId": null
}
}

# User Login API

## Overview

This API allows users to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is returned along with the user details.

## Endpoint

### POST /users/login

Logs in an existing user.

#### Request

- **URL**: `/users/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

{
"token": "your_jwt_token",
"user": {
"\_id": "user_id",
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"socketId": null
}
}

    # User Profile and Logout API

## Overview

These APIs allow users to view their profile and log out from the application.

## Endpoints

### GET /users/profile

Fetches the profile of the logged-in user.

#### Request

- **URL**: `/users/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }

### GET /users/logout

Logs out the logged-in user.

#### Request

- **URL**: `/users/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

```json
{
  "success": true,
  "message": "User Logged Out"
}
```
