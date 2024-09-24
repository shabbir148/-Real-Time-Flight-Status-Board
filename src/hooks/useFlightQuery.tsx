import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFlights = async () => {
  const { data } = await axios.get(
    "https://flight-status-mock.core.travelopia.cloud/flights"
  );
  return data;
};

const fetchFlightDetail = async (id: string) => {
  const { data } = await axios.get(
    `https://flight-status-mock.core.travelopia.cloud/flights/${id}`
  );
  return data;
};

// Custom hook for fetching all flights
export const useFlights = () => {
  return useQuery({
    queryKey: ["flights"],
    queryFn: fetchFlights,
    refetchInterval: 60000, // Refetch every 60 seconds
  });
};

// Custom hook for fetching a specific flight's details
export const useFlightDetail = (id: string) => {
  return useQuery({
    queryKey: ["flight", id],
    queryFn: () => fetchFlightDetail(id),
  });
};
