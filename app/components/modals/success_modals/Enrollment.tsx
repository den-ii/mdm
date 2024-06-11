import SuccessPopUp from ".";

function EnrollmentPopUp() {
  return (
    <SuccessPopUp
      tag="enrollmentSuccess"
      heading="Account Verified"
      successHeading="Account Enrolled Successfully"
      successLeading="You have successfully enrolled this customer."
      buttonText="View Customer"
    />
  );
}

export default EnrollmentPopUp;
