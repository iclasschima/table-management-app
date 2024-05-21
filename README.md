# Table Management Application

## Overview

This application is a simple table management system built with NextJS. It allows users to select tables from a floor plan and view the details of their selection, including any additional charges associated with each table.

## Features

- **State Management**: Utilizes React's built-in `useState` and `useEffect` hooks for managing state and side effects. The state includes whether the user is new, the tables they've booked, and the total cost of their booking.
- **Table Selection**: Users can select tables by clicking on them. If a table is already booked, an alert is shown. The selection logic is handled in the `handleSelectTable` function.
- **Cost Calculation**: The total cost of the booking is calculated based on the number of tables booked and any additional charges for each table. This logic is encapsulated in the `calculateTotalCost` function.
- **User Interface**: The UI is built with NextJS and TailwindCSS. It includes a floor plan where tables can be selected, and a sidebar where the details of the selected tables and the total cost are displayed.

## Development

The application was built using NextJS and TypeScript. We used the `npx create-next-app@latest` tool to bootstrap the project. The state management is done using React's built-in hooks, and the UI is built using JSX and TailwindCSS.

The development process was iterative:

1. Implemented basic functionality, such as table selection and cost calculation.
2. Refined the UI.
3. Added additional features, such as the new user discount.

## Deployment

The application was deployed using Vercel. Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with our React application.

You can access the deployed application at the following URL:
[https://table-management-app.vercel.app/](https://table-management-app.vercel.app/)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/table-management-app.git
   cd table-management-app

2. Install dependencies:

   ```bash
   npm install

   # or

   yarn install

### Running the Application

1. Start the development server:

   ```bash
   npm start

   # or

   yarn start

2. Open your browser and navigate to <http://localhost:3000> to see the application.

### Usage

**Select Tables**: Click on tables in the floor plan to select them.
**View Details**: See the selected tables and total cost in the sidebar.
