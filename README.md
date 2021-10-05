# ticket-backend

# How to set up

```bash
npm install
```

# How to start docker

```bash
docker run --name ticket-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo
```

# How to start development

```bash
npm start
```

## Features

- Get list of tickets sort by status and lastest update.
  ```bash
  Get localhost:4000/api/tickets
  ```
- Get list of tickets by status sort by lastest update.

  ```bash
  Get localhost:4000/api/tickets?status=<status>
  ```

- Create ticket.

  ```bash
  POST localhost:4000/api/tickets
  ```

- Update ticket information & status.
  ```bash
  PATCH localhost:4000/api/tickets/:id
  ```

## Postman usage

- Import "Ticket API.postman_collection.json" to Postman
