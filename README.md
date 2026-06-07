# Aerospace Manufacturing Work Order System

A full-stack web application for managing and tracking aerospace manufacturing work orders across multiple departments. The system enables production manager to create work orders, assign departments, track progress, manage engineering documents, and monitor production through a centralized dashboard.

---

## 🚀 Features

### Work Order Management

- Create, view, update, and delete work orders
- Track part information, quantity, and due dates

### Department Assignment

Work orders can be assigned to:

- CNC
- Composite
- Assembly
- Quality

### Status Tracking

Track work order lifecycle through:

- Created
- Assigned
- In Progress
- Completed
- Cancelled

### Document Management

- Upload engineering drawings and PDF documents
- Associate multiple documents with a work order
- View uploaded files

### Production Dashboard

- Total work orders
- Created work orders
- Assigned work orders
- In-progress work orders
- Completed work orders
- Department-wise workload distribution
- Upcoming due dates

## 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Shadcn UI
- Axios
- React Router Dom

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### File Storage

- Cloudinary

---

## 📁 Project Structure

```text
project-root/
│
├── client/
│   ├── src/
│   │   ├── components/
|   |   ├── contexts/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── providers/
│   │   └── services/
│   │
│   └── package.json
│
├── server/
|   ├── src/
│   │   ├── configs/
|   |   ├── controllers/
│   │   ├── error/
│   │   ├── models/
│   │   ├── respository/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── package.json
│
└── README.md
```

---

# 📊 Database Schema / Design Documentation

## WorkOrder Collection

```javascript
{
  _id,
  partName,
  partNumber,
  quantity,
  department,
  status,
  dueDate,
  createdAt,
  updatedAt
}
```

---

## Status Enum

```javascript
["CREATED", "ASSIGNED", "IN_PROGRESS", "COMPLETED", "CANCELLED"];
```

## Department Collection

```javascript
{
  _id,
  name,
  createdAt,
  updatedAt
}
```

---

## Document Collection

```javascript
{
    _id,
    workOrderId,
    documents [],
    drawings [], 

    createdAt,
    updatedAt
}
```

---

## Entity Relationship Overview

```text
WorkOrder
   |
   | 1
   |
   | 1
Documents

WorkOrder
    |
    | N
    |
    | 1
Department
```
---

# 🏗 Application Architecture

The application follows a standard three-tier architecture:

```text
Frontend (React)
        │
        ▼
REST API (Express.js)
        │
        ▼
MongoDB Database
        │
        ▼
Cloudinary Storage
```

### Frontend Responsibilities

- User interface
- Form validation
- Dashboard rendering
- API communication

### Backend Responsibilities

- Business logic
- Request validation
- Status management
- File upload handling
- Database operations

### Database Responsibilities

- Work order persistence
- Document metadata storage


---

# 🔄 Workflow Process

## 1. Create Work Order

Production manager creates a work order with:

- Part Name
- Part Number
- Quantity
- Due Date
- Department Assignment
- Drawings 
- Documents

Initial Status:

```text
CREATED
```

---

## 2. Department Assignment

Work order is assigned to one of:

```text
CNC
COMPOSITE
ASSEMBLY
QUALITY
```

---

## 3. Document Upload

Users can upload:

- PDF Drawings
- Engineering Documents

Documents are stored in Cloudinary and linked to the work order.

---

## 4. Progress Monitoring

Managers can monitor:

- Current status
- Assigned department
- Uploaded documents
- Production metrics


---

# ✅ Key Features Implemented

### Work Orders

- Create work orders
- View work orders
- Edit work orders
- Delete work orders

### Department Management

- Assign departments

### Status Tracking

- Status updates
- Progress monitoring

### Document Management

- PDF upload
- Cloudinary integration
- Document retrieval

### Dashboard

- Production overview
- Department workload
- Status distribution
- Upcoming due dates

### User Experience

- Responsive design
- Toast notifications
- Loading states

---

# ⚠ Assumptions Made

1. Each work order is assigned to only one department at a time.

2. Department workflow transitions are managed manually by manager.

3. Status transitions are managed manually by manager. 

4. Uploaded documents are limited to engineering drawings and PDFs.

5. User authentication and role-based authorization were considered out of scope unless explicitly required.

6. Cloudinary is used as the external storage provider for uploaded files.

8. Status changes are recorded for audit and tracking purposes.

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/basu-saxena/aerospace-manufacturing-system.git
cd aerospace-manufacturing-system
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Create a `.env` file:

```env
PORT=8000

MONGODB_URL=
CLIENT_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---
Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:8000/api
```

---


# 🔮 Future Enhancements

- Authentication & Authorization
- Role-Based Access Control
- Email Notifications
- Export Reports (PDF/Excel)
- Advanced Analytics
- Real-Time Updates
- Department Workflow Automation

---

# 👨‍💻 Author

**BASU SAXENA**

GitHub: https://github.com/basu-saxena
