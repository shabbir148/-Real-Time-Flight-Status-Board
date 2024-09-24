# Real-Time Flight Status Board (React + TypeScript)

This project is a real-time flight status board built using **React** and **TypeScript**. It retrieves flight details from a mock API, displays them in a table, and allows users to view more detailed information about a selected flight. The data is updated at regular intervals for real-time status updates.

# Features

- Flight Table: Displays a list of flights with key information like flight number, airline, origin, destination, departure time, and status.
- Real-Time Updates: Flight data is updated every 60 seconds.
- Detail View: Clicking on a flight shows detailed information about the selected flight.
- Navigation: Smooth navigation between the flight list and flight details using React Router.
- Error Handling: Graceful error handling for API failures or missing flight details.
- Loading Spinner: Displays a loading spinner while fetching flight data.
- Styled Components: The app is styled using `styled-components` for modular, scoped styles.

---

# Getting Started

# Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm comes pre-installed with Node.js)

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shabbir148/-Real-Time-Flight-Status-Board.git
   cd -Real-Time-Flight-Status-Board
   ```

2. Install dependencies:

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using yarn:

   ```bash
   yarn install
   ```

# Running the Application

1. Start the development server:

   Using npm:

   ```bash
   npm start
   ```

   Using yarn:

   ```bash
   yarn start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Real-Time Updates: The app will fetch new flight data every 60 seconds and update the table automatically.

# Running Tests

This application uses **Jest** and **React Testing Library** for testing.

1. Run the test suite:

   Using **npm**:

   ```bash
   npm test
   ```

   Using **yarn**:

   ```bash
   yarn test
   ```

   This runs the tests in interactive watch mode. Jest will automatically detect any changes and rerun relevant tests.

---

# Folder Structure

The main structure of the application is as follows:

```
/src
│
├── /components      # React components (FlightStatus, FlightDetails)
├── /hooks           # Custom hooks for fetching flight data using react-query
├── /__tests__       # Unit and integration tests for the components
└── App.tsx          # Main app component
```

---

# Technologies Used

- React: Frontend library for building user interfaces.
- TypeScript: For static type-checking.
- React Router: Handles navigation between the flight board and detail views.
- Axios: Used to make HTTP requests to the mock flight API.
- React Query: Manages server-state, caching, and data fetching.
- Styled-Components: CSS-in-JS styling solution.
- Jest: Test framework.
- React Testing Library: For writing unit tests and testing components.

---

# Mock API

This app fetches data from the following mock API:

- Flight List: [https://flight-status-mock.core.travelopia.cloud/flights](https://flight-status-mock.core.travelopia.cloud/flights)
- Flight Details: [https://flight-status-mock.core.travelopia.cloud/flights/:id](https://flight-status-mock.core.travelopia.cloud/flights/:id)

These endpoints simulate real-time flight data.



---

# Future Improvements

- Add filtering and sorting features to the flight list.
- Improve responsiveness for mobile screens.
- Add a "Favorite Flights" feature for users to track specific flights.

