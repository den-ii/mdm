"use client";
import { useCallback } from "react";
import FtuScreen from "@/components/ftu_screen";
import { useDispatch } from "react-redux";
import { openBillingInfoModal } from "@/lib/slice/modalSlice";

function Subcriptions() {
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
        imageAlt="you don’t have any app subscriptions"
        title="You Don’t Have Any App Subscriptions"
        description={`
        After you purchase a plan that has recurring and/or usage charges, it will be shown here.
        `}
        buttonText="Set Up Billing Information"
        buttonAction={handleBillingInformation}
      />
    </div>
  );
}

export default Subcriptions;
