# URl Shortening Service

Basic URL shortening service using AdonisJS and PostgreSQL

## Installation

```bash
npm install
```

## Setup

```bash
cp .env.example .env
```

## Usage

### Start the database

```bash
docker compose up -d
```

### Start the server

```bash
npm run dev
```

## Create a new URL

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.google.com"}' http://localhost:3333/url/shorten
```

### Response

```json
{
  "url": "https://www.google.com",
  "short_url": "http://localhost:3333/1"
}
```

## Redirect to the URL

```bash
curl http://localhost:3333/1
```

Normally, you should get a redirect to the URL
You can't test this in a REST client
