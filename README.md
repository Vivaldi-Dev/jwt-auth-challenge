# 🔐 JWT Auth Challenge - Basic User Authentication with JWTs

Este é um projeto de autenticação básica utilizando Node.js, TypeScript, Express, Prisma e JWT. Ele implementa uma API RESTful que permite:

- Criar contas de usuário
- Fazer login e receber um token JWT
- Acessar rotas protegidas com autenticação JWT
- Senhas são armazenadas de forma segura usando hashing com Bcrypt

---

## 📦 Tecnologias Usadas

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL (via Supabase)
- JSON Web Tokens (JWT)
- Railway (Deploy)

---

## 🚀 Deploy

A API está disponível em:

**https://jwt-auth-challenge.up.railway.app/**

Endpoints da API
Todas as rotas abaixo têm prefixo https://jwt-auth-challenge.up.railway.app/api


POST /signup
Criação de novo usuário.

Headers:
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "123456",
  "name": "User Test"
}

🔑 POST /login
Autenticação de usuário.

Headers:
Content-Type: application/json

Body:

{
  "email": "user@example.com",
  "password": "123456"
}


🔒 GET /users

GET /users
Retorna todos os usuários cadastrados.
(Protegido por token JWT)

Retorna todos os usuários cadastrados.
(Protegido por token JWT)

Headers:
Authorization: Bearer <seu-token-jwt>

