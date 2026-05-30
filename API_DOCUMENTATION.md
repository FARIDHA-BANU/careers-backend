# Careers Backend API Documentation

## Project Overview

This backend provides Career Management APIs for the Careers page. It allows frontend applications to perform CRUD (Create, Read, Update, Delete) operations on job postings.

---

## Technology Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* REST API

---

## Base URL

Public Testing URL:

https://going-scam-unclamped.ngrok-free.dev

Local Development URL:

http://localhost:5000

---

# Career Object Structure

```json
{
  "jobTitle": "Frontend Developer",
  "department": "Engineering",
  "location": "Remote",
  "experience": "2+ Years",
  "description": "React Developer Role",
  "skills": ["React", "JavaScript"],
  "applyLink": "https://company.com/apply"
}
```

---

# API Endpoints

## 1. Get All Careers

### Request

GET /api/careers

### Example

GET https://going-scam-unclamped.ngrok-free.dev/api/careers

### Success Response

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "6839abcd1234",
      "jobTitle": "Frontend Developer",
      "department": "Engineering",
      "location": "Remote",
      "experience": "2+ Years",
      "description": "React Developer Role",
      "skills": ["React", "JavaScript"],
      "applyLink": "https://company.com/apply"
    }
  ]
}
```

---

## 2. Get Career By ID

### Request

GET /api/careers/:id

### Example

GET https://going-scam-unclamped.ngrok-free.dev/api/careers/6839abcd1234

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "6839abcd1234",
    "jobTitle": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "2+ Years",
    "description": "React Developer Role",
    "skills": ["React", "JavaScript"],
    "applyLink": "https://company.com/apply"
  }
}
```

---

## 3. Create Career

### Request

POST /api/careers

### Headers

Content-Type: application/json

### Request Body

```json
{
  "jobTitle": "Frontend Developer",
  "department": "Engineering",
  "location": "Remote",
  "experience": "2+ Years",
  "description": "React Developer Role",
  "skills": ["React", "JavaScript"],
  "applyLink": "https://company.com/apply"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "6839abcd1234",
    "jobTitle": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "2+ Years",
    "description": "React Developer Role",
    "skills": ["React", "JavaScript"],
    "applyLink": "https://company.com/apply"
  }
}
```

---

## 4. Update Career

### Request

PUT /api/careers/:id

### Example

PUT https://going-scam-unclamped.ngrok-free.dev/api/careers/6839abcd1234

### Request Body

```json
{
  "experience": "3+ Years"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "6839abcd1234",
    "jobTitle": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "3+ Years"
  }
}
```

---

## 5. Delete Career

### Request

DELETE /api/careers/:id

### Example

DELETE https://going-scam-unclamped.ngrok-free.dev/api/careers/6839abcd1234

### Success Response

```json
{
  "success": true,
  "message": "Job deleted successfully"
}
```

---

# Testing

The APIs were tested using Thunder Client.

Tested Operations:

* Create Career
* Get All Careers
* Get Career By ID
* Update Career
* Delete Career

---

# GitHub Repository

Repository:

https://github.com/FARIDHA-BANU/careers-backend

---

# Notes For Frontend Team

Base URL:

https://going-scam-unclamped.ngrok-free.dev

Available Endpoints:

GET /api/careers

GET /api/careers/:id

POST /api/careers

PUT /api/careers/:id

DELETE /api/careers/:id

Use JSON format for all request bodies and responses.
