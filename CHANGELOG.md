# Changelog

All notable changes to this project will be documented in this file.

## [v1.0.0] - Initial Frontend Release

### Added

- Landing page as the application entry point with menu-based access
- Admin dashboard for managing borrowing requests
- User page for submitting room borrowing requests
- Borrowing history page with detailed data display
- Edit borrowing page for administrators
- Detail modal for viewing borrowing information
- Reusable components for borrowing management:
  - Borrowing table
  - Status badge
  - Detail modal
  - Filter bar (search, filter, sort)
- Navigation bars for both Admin and User interfaces
- Client-side routing using React Router

### Search, Filter & Sorting

- Real-time search across borrowing data
- Status-based filtering (Pending, Approved, Rejected)
- Sorting options by date and borrower name
- Dynamic result count display

### Improved

- Enhanced error handling when updating borrowing status
- Specific alert for date conflict during approval
- Improved UI feedback for failed update actions
- Corrected navigation links in user navbar
- Refined styling for admin and user navigation bars
- Improved landing page visual design and layout

### UI / Styling

- Modern, responsive layout using Tailwind CSS
- Interactive cards for menu selection on landing page
- Improved hover effects and visual hierarchy
- Clean and consistent design across pages

###  Technical

- Integration with backend API via Axios
- Custom hooks for managing borrowing state
- Separation of concerns between pages, components, and API layer
- Feature-based folder structure for scalability
