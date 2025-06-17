// Reservations.js
import React, { useState, useReducer } from "react";
import "./Reservations.css";
import BookingForm from "../components/BookingForm/BookingForm";
import { fetchAPI } from "../utils/ReservationLogic";

const Reservations = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setShowAlert(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div data-testid="reservations-component" className="booking-container">
      <div className="booking-card">
        <h1 className="booking-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {showAlert &&
        alert('Reservation submitted')}
    </div>
  );
};

export default Reservations;
