import SuccessPopUp from ".";

function BillingInfoPopUp() {
  return (
    <SuccessPopUp
      tag="billingInfoSuccess"
      heading="Billing Information"
      successHeading=" Billing Setup Initiated Successfully"
      successLeading="We have received your billing information. You'll be notified once
      it's verified and securely stored."
      buttonText="View Billings and Payment"
    />
  );
}

export default BillingInfoPopUp;
