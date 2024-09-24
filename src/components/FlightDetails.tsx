import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFlightDetail } from "../hooks/useFlightQuery";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const DetailsContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FlightHeader = styled.h1`
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
`;

const FlightDetailItem = styled.p`
  font-size: 1.1em;
  margin: 10px 0;
  line-height: 1.5;

  strong {
    color: #007bff;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: flight, error, isLoading } = useFlightDetail(id as string);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <SpinnerContainer>
        <ClipLoader color="#007bff" loading={isLoading} size={50} />
        <p>Loading flight details...</p>
      </SpinnerContainer>
    );
  }

  if (error) {
    return <div>Error loading flight details</div>;
  }

  return (
    <DetailsContainer>
      <FlightHeader>Flight {flight.flightNumber} Details</FlightHeader>
      <FlightDetailItem>
        <strong>Airline:</strong> {flight.airline}
      </FlightDetailItem>
      <FlightDetailItem>
        <strong>Origin:</strong> {flight.origin}
      </FlightDetailItem>
      <FlightDetailItem>
        <strong>Destination:</strong> {flight.destination}
      </FlightDetailItem>
      <FlightDetailItem>
        <strong>Departure Time:</strong>{" "}
        {new Date(flight.departureTime).toLocaleString()}
      </FlightDetailItem>
      <FlightDetailItem>
        <strong>Status:</strong> {flight.status}
      </FlightDetailItem>

      {/* Back Button */}
      <BackButton onClick={() => navigate("/")}>
        Back to Flight Board
      </BackButton>
    </DetailsContainer>
  );
};

export default FlightDetails;
