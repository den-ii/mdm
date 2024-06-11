import { useRouter } from "next/router";
import SuccessPopUp from ".";

function EnrollmentPopUp() {
  const router = useRouter();

  const navigateToView = () => {
    router.push("/customers/view");
  };

  return (
    <SuccessPopUp
      tag="enrollmentSuccess"
      heading="Account Verified"
      successHeading="Account Enrolled Successfully"
      successLeading="You have successfully enrolled this customer."
      buttonText="View Customer"
      buttonAction={navigateToView}
    />
  );
}

export default EnrollmentPopUp;
