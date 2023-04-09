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


### Flow Diagram

### Sequence Diagram

### Project Structure

---
## Frontend Architecture

