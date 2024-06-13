"use client";
import React, { useCallback } from "react";
import Buttons from "../button";
import { useDispatch } from "react-redux";
import { openCustomerEnrollmentModal } from "@/lib/slice/modalSlice";

function AddCustomerButton() {
  const dispatch = useDispatch();

  const handleEnrollCustomer = useCallback(
    () => dispatch(openCustomerEnrollmentModal()),
    []
  );
  return (
    <div className="text-right mt-2">
      <Buttons primary noWidth onClick={handleEnrollCustomer}>
        Add Customer
      </Buttons>
    </div>
  );
}

export default AddCustomerButton;
