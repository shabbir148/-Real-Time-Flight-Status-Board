import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlightStatus from "../components/FlightStatus";

const queryClient = new QueryClient();

beforeEach(() => {
  queryClient.clear();
});

test("renders flight board with a loading state", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <FlightStatus />
    </QueryClientProvider>
  );

  // Check if loading message appears
  expect(screen.getByText(/Loading flight details.../i)).toBeInTheDocument();
});
