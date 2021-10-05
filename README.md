# ticket-backend

# How to set up

Build ticket-backend image

```bash
docker build -t docker-node-ticket .
```

Build docker-compose

```bash
docker-compose build
```

Run docker-compose

```
docker-compose up
```

# Features

- Get list of tickets sort by status and lastest update.
  ```bash
  Get localhost:5000/api/tickets
  ```
- Get list of tickets by status sort by lastest update.

  ```bash
  Get localhost:5000/api/tickets?status=<status>
  ```

- Create ticket need "title" field to create ticket.

  ```bash
  POST localhost:5000/api/tickets
  ```

- Update ticket information such as title, description, contactInformation, status
  ```bash
  PATCH localhost:5000/api/tickets/:id
  ```

# Ticket schema

title : string <b>(Required)</b>\
 description : string\
 contactInformation : string\
 createdTimeStamp : Date (default = Date.now)\
 updateTimeStamp : Date\
 status : string (default = 'pending')

# Postman usage

- Import "Ticket API.postman_collection.json" to Postman
