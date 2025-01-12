
# 1. ERD

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

# 2. Components

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

# 3. API and Websocket Documentation

## API Endpoints
1. `POST /api/scores/increment`

- Description: Increment a user's score.
- Request:
  - Headers: Authorization: Bearer <JWT>
  - Body:
  ```` json
  {
    "userId": 1,
    "increment": 10
  }
  ````
  - Response:
  - Success (200):
  ````json
  {
    "message": "Score updated successfully",
    "newScore": 120
  }
  ````
  - Errors:
    - `401 Unauthorized`
    - `400 Bad Request`
    - `500 Internal Server Error`

2. `GET /api/scores/top10`

- Description: Retrieve the top 10 scores.
- Response:
  - Success (200):
  ````json
  {
    "topScores": [
      { "userId": 1, "username": "Alice", "score": 200 },
      { "userId": 2, "username": "Bob", "score": 190 }
    ]
  }
  ````

## WebSocket Communication
> Websocket URL: /ws/scores
1. Top 10 Scores Update
- Server to Client:
  ````json
  {
    "type": "top10",
    "topScores": [
      { "userId": 1, "username": "Alice", "score": 200 },
      { "userId": 2, "username": "Bob", "score": 190 }
    ]
  }
  ````

# 4. Execution Flow Diagram
``` mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant WebSocket
    participant Database

    User->>Frontend: Perform Action
    Frontend->>Backend: API Call (Increment Score) with JWT
    Backend->>Database: Update Score
    Database->>Backend: Score Updated
    Backend->>WebSocket: Broadcast Updated Top 10
    WebSocket->>Frontend: Push Top 10 Scores
    Frontend->>User: Update UI

```