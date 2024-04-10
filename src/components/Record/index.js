import React from "react";
import { useSelector } from "react-redux";

const Record = () => {
  const state = useSelector((state) => state?.course?.value);

  return (
    <>
      <h2>Student Name</h2>
      <p>
        <strong>First Name : </strong>
        {state.studentName.firstName}
      </p>
      <p>
        <strong>Middle Name : </strong>
        {state.studentName.midName}
      </p>
      <p>
        <strong>Last Name : </strong>
        {state.studentName.lastName}
      </p>

      <h2>Birth Date</h2>
      <p>
        <strong>Month : </strong>
        {state.birthDate.month}
      </p>
      <p>
        <strong>Day : </strong>
        {state.birthDate.day}
      </p>
      <p>
        <strong>Year : </strong>
        {state.birthDate.year}
      </p>

      <h2>Gender</h2>
      <p>
        <strong>Gender : </strong>
        {state.gender}
      </p>

      <h2>Address</h2>
      <p>
        <strong>Street Address : </strong>
        {state.address.street_address_01}
      </p>
      <p>
        <strong>Street Address Line 2: </strong>
        {state.address.street_address_02}
      </p>
      <p>
        <strong>City : </strong>
        {state.address.city}
      </p>
      <p>
        <strong>State / Province : </strong>
        {state.address.state}
      </p>
      <p>
        <strong>Postal / Zip Code : </strong>
        {state.address.zipCode}
      </p>
    </>
  );
};

export default Record;
