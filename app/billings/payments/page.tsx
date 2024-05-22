"use client";
import { useCallback } from "react";
import FtuScreen from "@/components/ftu_screen";
import { useDispatch } from "react-redux";
import { openBillingInfoModal } from "@/lib/slice/modalSlice";

function Payments() {
  const dispatch = useDispatch();

  const handleBillingInformation = useCallback(() => {
    dispatch(openBillingInfoModal());
  }, []);

  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/billing/no_billings.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no payment"
        title="Manage Upcoming Payments"
        description={`
        Your paid invoices and subscriptions will appear here.
        `}
        buttonText="Set Up Billing Information"
        buttonAction={handleBillingInformation}
      />
    </div>
  );
}

export default Payments;
