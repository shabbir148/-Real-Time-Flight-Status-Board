import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightBoard from "./components/FlightStatus";
import FlightDetails from "./components/FlightDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<FlightBoard />} />
          <Route path="/flights-details/:id" element={<FlightDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
