"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";
import { openCustomerEnrollmentModal } from "@/lib/slice/modalSlice";

function CustomersPage() {
  const dispatch = useDispatch();

  const handleEnrollCustomer = useCallback(
    () => dispatch(openCustomerEnrollmentModal()),
    []
  );

  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/customers/no_customer.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no customer assigned"
        title="No Customer Assigned Yet"
        description={`Start your journey by ensuring customers activate their devices and undergo verification. 
        Once done, welcome them aboard to your platform.`}
        buttonAction={handleEnrollCustomer}
        buttonText="Add Customer"
      />
    </div>
  );
}

export default CustomersPage;
