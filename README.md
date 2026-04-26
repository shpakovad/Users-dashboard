# Users Dashboard

A simple users dashboard built with **Next.js**, **React Query**, **Ant Design**, and **TypeScript**.

### Main page

<img src="/public/table.png" alt="Users table"/>

### User page

<img src="/public/single_user.png" alt="Users table"/>

### No data found

<img src="/public/no_data.png" alt="Users table"/>

---

## Features

- Users table with pagination
- Server-side sorting
- Search with debounce
- User details page
- Delete user
- Error / empty / loading states

---

## Tech Stack

- Next.js (App Router)
- React Query (TanStack Query)
- Ant Design
- TypeScript

---

## API

Data is fetched from:
https://dummyjson.com/users

___

## Architecture
- `features` → UI logic
- `entities` → domain logic
- `shared` → reusable components & utils

---

## Getting Started

```bash
npm install
npm run dev
