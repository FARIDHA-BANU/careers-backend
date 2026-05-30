# Careers Backend API Documentation

## Base URL

### Local Development

```http
http://localhost:5000
```

### Production

```http
https://your-deployed-url.com
```

---

# Careers API

## 1. Get All Careers

### Endpoint

```http
GET /api/careers
```

### Description

Fetch all available career opportunities.

### Response

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "685a123456",
      "jobTitle": "Frontend Developer",
      "department": "Engineering",
      "location": "Remote",
      "experience": "1-3 Years",
      "description": "React Developer Required",
      "skills": [
        "React",
        "JavaScript",
        "Tailwind CSS"
      ],
      "applyLink": "https://company.com/apply",
      "createdAt": "2026-05-30T10:00:00.000Z",
      "updatedAt": "2026-05-30T10:00:00.000Z"
    }
  ]
}
```

---

## 2. Get Single Career

### Endpoint

```http
GET /api/careers/:id
```

### Example

```http
GET /api/careers/685a123456
```

### Response

```json
{
  "success": true,
  "data": {
    "_id": "685a123456",
    "jobTitle": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "1-3 Years",
    "description": "React Developer Required",
    "skills": [
      "React",
      "JavaScript"
    ],
    "applyLink": "https://company.com/apply"
  }
}
```

---

## 3. Create Career

### Endpoint

```http
POST /api/careers
```

### Request Body

```json
{
  "jobTitle": "Frontend Developer",
  "department": "Engineering",
  "location": "Remote",
  "experience": "1-3 Years",
  "description": "React Developer Required",
  "skills": [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ],
  "applyLink": "https://company.com/apply"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "685a123456",
    "jobTitle": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "1-3 Years",
    "description": "React Developer Required",
    "skills": [
      "React",
      "JavaScript",
      "Tailwind CSS"
    ],
    "applyLink": "https://company.com/apply"
  }
}
```

---

## 4. Update Career

### Endpoint

```http
PUT /api/careers/:id
```

### Example

```http
PUT /api/careers/685a123456
```

### Request Body

```json
{
  "experience": "2-4 Years"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "_id": "685a123456",
    "experience": "2-4 Years"
  }
}
```

---

## 5. Delete Career

### Endpoint

```http
DELETE /api/careers/:id
```

### Example

```http
DELETE /api/careers/685a123456
```

### Response

```json
{
  "success": true,
  "message": "Job deleted successfully"
}
```

---

# Career Object Structure

| Field       | Type          | Required |
| ----------- | ------------- | -------- |
| jobTitle    | String        | Yes      |
| department  | String        | Yes      |
| location    | String        | Yes      |
| experience  | String        | Yes      |
| description | String        | Yes      |
| skills      | Array[String] | No       |
| applyLink   | String        | No       |

---

# Frontend Integration Examples

## Fetch All Careers

```javascript
const response = await fetch(
  "http://localhost:5000/api/careers"
);

const data = await response.json();
console.log(data);
```

---

## Create Career

```javascript
const response = await fetch(
  "http://localhost:5000/api/careers",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jobTitle: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      experience: "1-3 Years",
      description: "React Developer Required"
    })
  }
);

const data = await response.json();
console.log(data);
```

---

# Status Codes

| Code | Description           |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Resource Created      |
| 404  | Resource Not Found    |
| 500  | Internal Server Error |

```
```
