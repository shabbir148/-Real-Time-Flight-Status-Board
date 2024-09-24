import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import FlightDetails from "../components/FlightDetails";

const queryClient = new QueryClient();

test("renders flight details with a loading state", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/flights-details/1"]}>
        <Routes>
          <Route path="/flights-details/:id" element={<FlightDetails />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(screen.getByText(/loading flight details/i)).toBeInTheDocument();
});
