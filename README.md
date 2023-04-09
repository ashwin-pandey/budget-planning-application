# Budget Planning Application <!-- omit from toc -->

#### Table Of Contents <!-- omit from toc -->

- [Description](#description)
- [Features - Overview](#features---overview)
- [Features - Detailed](#features---detailed)
  - [Login / Signup](#login--signup)
  - [Categories](#categories)
  - [Budgeting](#budgeting)
- [Development Timeline](#development-timeline)
- [Backend Architecture](#backend-architecture)
  - [Database Schema](#database-schema)
  - [APIs](#apis)
  - [Flow Diagram](#flow-diagram)
  - [Sequence Diagram](#sequence-diagram)
  - [Project Structure](#project-structure)
- [Frontend Architecture](#frontend-architecture)

## Description

This application is to primarily plan monthly budget.

## Features - Overview

1. Login / signup to manage each individuals plannings.
2. Categories - Types of income / expenses.
3. Budgeting - To plan monthly income / expenses beforehand.
4. Graphs and charts based on the income and expenses (charts to determine expense habits).

## Features - Detailed

### Login / Signup
- Basic login / sign-up based on username, email and password.
- Token based authentication for each api request from frontend.
- Login / signup using google ( phase 2 ).
- User can see the dashboard only after a successful login.
- Validate the uniqueness of username and email id on sign-up.
- Differentiate the users based on role.

---

### Categories
- Make the categories of both income and expenses available.
- Add sub-categories for all the applicable categories.
- Mandatory to select a category while creating a new income / expense.

---

### Budgeting
- Allow budgeting for the month ( of the whole year )
- It should not exceed the total of income ( throw an error message in case it exceeds the total income )

---

## Development Timeline

---
## Backend Architecture

### Database Schema

<kbd>![Alt text](https://github.com/ashwin-pandey/budget-planning-application/blob/master/backend/assets/images/schema.png)</kbd>

**User roles**

- id (primary key)
- name
- status
- updated_date
- created_date
  
**Users**

- id (primary key)
- username (unique key)
- email (unique key)
- first_name 
- last_name
- role_id (foreign key)
- description
- image
- status
- created_date
- updated_date

**Categories**

- id (primary key)
- name
- parent_id
- description
- status
- image
- created_date
- updated_date

**Income / Expenses**

- id
- value
- description
- category_id
- created_date
- updated_date

### APIs

**Categories (6)**
1. GET - All categories
2. GET - Category by id
3. GET - All sub-categories by parent_id
4. POST - Create a category
5. PUT - Update a category
6. DELETE - Delete a category

**User roles (4)**
1. GET - All user roles
2. POST - Create a new role
3. PUT - Update the role
4. DELETE - Delete user role

**Users (6)**
1. GET - All users
2. GET - A specific user
3. POST - Create a new user (signup)
4. PUT - Update an existing user
5. DELETE - Delete an existing user
6. POST - Login

**Income / expenses (10)**
1. GET - All income/expenses of a user
2. GET - All income/expenses of a user based on date
3. POST - Create new income/expense for a user
4. PUT - Update an existing income/expense
5. DELETE - Delete an exising income/expense

### Flow Diagram

### Sequence Diagram

### Project Structure

---
## Frontend Architecture

