"use client";
import { useCallback } from "react";
import FtuScreen from "@/components/ftu_screen";
import { useDispatch } from "react-redux";
import { openBillingInfoModal } from "@/lib/slice/modalSlice";

function Invoices() {
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
        imageAlt="no invoice"
        title="No Invoice Issused Yet"
        description={`
        Your issued invoices will appear here. DevOS Admin will issue invoices to you. Keep an eye on notifications for updates.
        `}
        buttonText="Set Up Billing Information"
        buttonAction={handleBillingInformation}
      />
    </div>
  );
}

export default Invoices;
