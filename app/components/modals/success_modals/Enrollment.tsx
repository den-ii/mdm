import { useRouter } from "next/navigation";
import SuccessPopUp from ".";
import { useDispatch } from "react-redux";
import { closeModals } from "@/lib/slice/modalSlice";

function EnrollmentPopUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  const navigateToView = () => {
    router.push("/customers/view");
    dispatch(closeModals());
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
