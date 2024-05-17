import SuccessPopUp from ".";

function RequestDevicePopUp() {
  return (
    <SuccessPopUp
      tag="requestDeviceSuccess"
      heading="Request Device"
      successHeading="Request Sent Successfully"
      successLeading="You have successfully requested for device to be assigned to you."
      buttonText="View Assigned Device"
    />
  );
}

export default RequestDevicePopUp;
