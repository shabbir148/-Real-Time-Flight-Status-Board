import React from "react";
import { Link } from "react-router-dom";
import { useFlights } from "../hooks/useFlightQuery";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const FlightTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1.2em;
  text-align: left;
  background-color: #f8f9fa;
`;

const TableHead = styled.th`
  background-color: #007bff;
  color: white;
  padding: 12px 15px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlightStatus: React.FC = () => {
  const { data: flights, error, isLoading } = useFlights();

  if (isLoading) {
    return (
      <SpinnerContainer>
        <ClipLoader color="#007bff" loading={isLoading} size={100} />
        <p>Loading flight details...</p>
      </SpinnerContainer>
    );
  }

  if (error) {
    return <div>Error loading flights...</div>;
  }

  return (
    <FlightTable>
      <thead>
        <tr>
          <TableHead>Flight Number</TableHead>
          <TableHead>Airline</TableHead>
          <TableHead>Origin</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Departure Time</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight: any) => (
          <TableRow key={flight.id}>
            <TableData>
              <Link to={`/flights-details/${flight.id}`}>
                {flight.flightNumber}
              </Link>
            </TableData>
            <TableData>{flight.airline}</TableData>
            <TableData>{flight.origin}</TableData>
            <TableData>{flight.destination}</TableData>
            <TableData>
              {new Date(flight.departureTime).toLocaleString()}
            </TableData>
            <TableData>{flight.status}</TableData>
          </TableRow>
        ))}
      </tbody>
    </FlightTable>
  );
};

export default FlightStatus;
