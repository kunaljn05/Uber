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