# Database Architecture

This document describes the current database status of the MapWork website and diagrams the recommended future schema structure for lead management.

---

## 📋 Current Implementation Status
MapWork is currently a static landing page built in Next.js 15. The application **does not connect to a database or maintain persistent records**. 

All data elements shown on the website (e.g. sectors list, roadmaps, and features list) are stored as statically declared Javascript array variables in React components.

---

## 🔮 Recommended Future SQL Database Architecture
As MapWork scales to support lead tracking, customized territory configurations, and user logins, we recommend implementing a relational database:
*   **Database Engine**: PostgreSQL (fully supported by cloud platforms like Supabase or Neon).
*   **Object-Relational Mapping (ORM)**: Prisma ORM for type-safe database queries.

### Suggested Entities Outline (SQL Schema Draft)

```mermaid
erDiagram
    USERS ||--o{ TERRITORIES : owns
    USERS {
        uuid id PK
        string email
        string password_hash
        string full_name
        timestamp created_at
    }
    TERRITORIES ||--o{ ACCUMULATED_LEADS : contains
    TERRITORIES {
        uuid id PK
        uuid user_id FK
        string region_name
        polygon boundary_coordinates
        timestamp created_at
    }
    ACCUMULATED_LEADS {
        uuid id PK
        uuid territory_id FK
        string business_name
        string street_address
        float latitude
        float longitude
        string place_id UNIQUE
        string category
        json contact_details
        timestamp discovered_at
    }
```

---

## 🔄 Migration & Scalability Strategy
1.  **Deployment**: Configure the backend variables (`DATABASE_URL`) on remote staging.
2.  **ORM Initialization**: Initialize Schema queries using Prisma (`npx prisma migrate dev`).
3.  **Data Life Cycle**: Ensure old leads in territory scans are purged or moved to cold storage after 90 days of inactivity to keep index queries fast.
