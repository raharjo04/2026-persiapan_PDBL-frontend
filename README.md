# LabSpace — Room Borrowing System (Frontend)

Frontend application for managing laboratory room borrowing requests.  
This system provides separate interfaces for administrators and users to handle submission, approval, and monitoring of room usage.

### Features
  ### Room Borrowing Management
  The system records and manages room borrowing requests submitted by users.
  - Create new borrowing requests
  - View list of borrowing records
  - View detailed information for each request
  - Update existing borrowing data
  - Delete borrowing records

  ### Borrowing Status Management
  Each borrowing request includes a status indicating   its current state.
  
  - View borrowing status (Pending, Approved,   Rejected)
  - Update request status (Admin approval workflow)

  ### Borrowing History & Search
  Administrators can explore and analyze stored   borrowing data.
  
  - View borrowing history
  - Search borrowing records
  - Filter data by status
  - Sort data by selected criteria (e.g., date or   borrower name)

### Landing Page

- Entry page as the starting point of the application
- Menu-based navigation to Admin or User modules
- Clean and responsive design

### User Module

- Submit room borrowing requests
- View borrowing status and history
- Simple and intuitive interface

### Admin Module

- Manage borrowing requests
- Approve or reject submissions
- View borrowing history
- Edit or delete borrowing data
- Monitor room usage

### Data Management

- Search borrowing records in real time
- Filter by status (Pending, Approved, Rejected)
- Sort data by date or borrower name
- Detailed modal view for each borrowing request

### Validation & Feedback

- Prevent approval conflicts for the same room and date
- Display specific error messages from the backend
- Improved user feedback for failed operations


## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Project Structure
src/
api/ # API communication layer
components/ # Reusable UI components
hooks/ # Custom React hooks
pages/ # Admin and User pages
types/ # TypeScript type definitions

## Getting Started
   1. Install dependencies
      npm install

   2. Run development server
      npm run dev

   3. Open in browser
      http://localhost:5xxx

## Backend Integration

This frontend is designed to work with an ASP.NET Core Web API backend that handles:
- Room management
- Borrowing requests
- Approval workflow
- Conflict validation

## Notes

- This project is intended for academic and learning purposes.
- Role selection on the landing page is menu-based and does not include authentication.

## License

For educational use only.