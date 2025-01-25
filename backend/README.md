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

# Captain Registration API

## Overview

This API allows captains to register by providing their first name, last name, email, password, and vehicle details. Upon successful registration, a JSON Web Token (JWT) is returned along with the captain details.

## Endpoint

### POST /captian/register

Registers a new captain.

#### Request

- **URL**: `/captian/register`
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
    "password": "password123",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Response

    {
    "captian": {
      "_id": "captian_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null,
      "status": "inactive",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "location": {
        "lat": null,
        "lng": null
      }
    },
    "token": "your_jwt_token"

}

    # Captain Login API

## Overview

This API allows captains to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is returned along with the captain details.

## Endpoint

### POST /captian/login

Logs in an existing captain.

#### Request

- **URL**: `/captian/login`
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
"captian": {
"\_id": "captian_id",
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"socketId": null,
"status": "inactive",
"vehicle": {
"color": "red",
"plate": "ABC123",
"capacity": 4,
"vehicleType": "car"
},
"location": {
"lat": null,
"lng": null
}
},
"token": "your_jwt_token"
}

### GET /captian/profile

Fetches the profile of the logged-in captain.

#### Request

- **URL**: `/captian/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

````json
{
  "_id": "captian_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null,
  "status": "inactive",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "location": {
    "lat": null,
    "lng": null
  }
}

 ### GET /captian/logout

Logs out the logged-in captain.

#### Request

- **URL**: `/captian/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

  ```json
  {
    "success": true,
    "message": "Captain Logged Out"
  }
````
