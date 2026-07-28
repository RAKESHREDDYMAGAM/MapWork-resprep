# API Design Specifications

This document outlines the API route suggestions and standard conventions for MapWork.

---

## 📋 Current API Status
Currently, **no API integrations or API routes exist** in the MapWork codebase. The website runs locally without making dynamic network requests.

---

## 🔮 Proposed REST API Architecture
For future integration of form submissions (such as contacts, team size quotes, and lead downloads), we recommend setting up Next.js internal API Routes using the standard `src/app/api/...` subdirectories.

### Recommended Core Endpoints

#### 1. Contact Form Submission
*   **Route**: `/api/contact`
*   **Method**: `POST`
*   **Content-Type**: `application/json`
*   **Expected Payload**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "companySize": "10-50",
      "message": "We would like to request a demo for territory optimization."
    }
    ```
*   **Responses**:
    *   `201 Created` - Success payload confirmation.
    *   `400 Bad Request` - Missing validation items (e.g. invalid email format).

#### 2. Local Coordinates Scan (Lead Fetching)
*   **Route**: `/api/leads/scan`
*   **Method**: `POST`
*   **Expected Payload**:
    ```json
    {
      "latitude": 12.9716,
      "longitude": 77.5946,
      "radiusMeters": 2000
    }
    ```
*   **Response**: `200 OK` housing a list array of B2B pins found.

---

## 🛡️ Errors and Versioning Strategy
*   **Header Versioning**: We recommend versioning APIs headers (`Accept: application/vnd.mapwork.v1+json`) to maintain backwards compatibility.
*   **JSON-Schema Standards**: All responses should follow standard output blocks:
    ```json
    {
      "success": false,
      "error": {
        "code": "VALIDATION_FAILED",
        "message": "Field 'email' is required.",
        "details": []
      }
    }
    ```
*   **Validation Rules**: Validate endpoint input types securely using libraries like `zod` to prevent SQL/NoSQL injection scripts.
