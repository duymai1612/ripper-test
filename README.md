# Ripper - Booking App

## Features

- **Login Screen** with email validation and conditional button enabling
- **Home Screen** with infinite scrolling list of bookings
- **Theme System** with light and dark mode support
- **Toast Notifications** for form errors
- **High Performance** booking list with SectionList and date grouping
- **Responsive UI** that works on various screen sizes
- **SVG Icons** for each sport type

## Technology Stack

- React Native with Expo
- TypeScript for type safety
- React Navigation for routing
- Formik + Yup for form handling and validations
- date-fns for date/time handling with timezone support
- React Native SVG for vector icon rendering

## Project Structure

- `app/` - Screen components organized by feature
- `components/` - Reusable UI components
- `services/` - Business logic, APIs, constants, and types
- `assets/` - Static assets like images and icons

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Start the development server:
   ```
   yarn start
   ```

## Key Implementation Details

- Implemented a mock API service that generates random booking data
- Used SectionList for high-performance rendering of grouped data
- Created a theme context that enables easy switching between light and dark modes
- Added email validation with error toasts
- Implemented custom SVG icons for different sports
- Used date-fns for proper date formatting with timezone support
