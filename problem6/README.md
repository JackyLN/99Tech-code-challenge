
1. ERD

``` mermaid
erDiagram
    User {
        int id PK
        string username
        string email
        string passwordHash
        datetime createdAt
        datetime updatedAt
    }

    Score {
        int id PK
        int userId FK
        int score
        datetime updatedAt
    }

    User ||--o{ Score : has
```

2. Components

``` mermaid
graph LR
    A[User] -- "Performs Action" --> B[Frontend App]
    B -- "API Call: Update Score" --> C[Application Server]
    C -- "Authorization & Validation" --> D[Database]
    C -- "Push Update to Clients" --> E[WebSocket Server]
    E -- "Broadcast Top 10 Scores" --> F[All Connected Clients]

    subgraph Backend
        C[Application Server]
        D[Database]
        E[WebSocket Server]
    end
```