import Modal from "..";
import { useDispatch } from "react-redux";
import {
  closeAModal,
  openEnrollmentSuccessModal,
  openRequestDeviceSuccModal,
} from "@/lib/slice/modalSlice";
import { Backward } from "iconsax-react";
import AddCustomer from "./AddCustomer";
import { useCallback, useState } from "react";
import EnrollmentCode from "./EnrollmentCode";
import CustomerDetails from "./CustomerDetails";
import Buttons from "@/components/button";

function EnrollNewCustomerModal() {
  const [stage, setStage] = useState(2);
  const [maxHeight, setMaxHeight] = useState("max-h-[370px]");
  const dispatch = useDispatch();

  const generateHeading = () => {
    switch (stage) {
      case 2:
        return "Enroll Customer";
      case 3:
        return "Enrollment Code";
      case 4:
        return "Customer Details";
      default:
        break;
    }
  };

  const handleButtonFunc = () => {
    switch (stage) {
      case 2:
        setStage(3);
        break;
      case 3:
        console.log("Enroll Customer");
        setStage(4);
        break;
      case 4:
        dispatch(openEnrollmentSuccessModal());
      default:
        break;
    }
  };

  const handleMaxHeight = (val: string) => setMaxHeight(val);

  const handleButtonText = () => {
    switch (stage) {
      case 2:
        return "Continue";
      case 3:
        return "Enroll Customer";
      case 4:
        return "Generate One Time Passcode";
      default:
        break;
    }
  };

  const stage2 = stage === 2;
  const stage3 = stage === 3;
  const stage4 = stage === 4;

  const heading = (
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-xl">{generateHeading()}</h3>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer">
          <Backward size="24" color="#0151FD" variant="Bold" />
        </div>
        <p className="font-Poppins font-normal text-sm">
          Step <span className="text-primary_700">{stage}</span> of 4
        </p>
      </div>
    </div>
  );

  return (
    <Modal heading={heading} maxHeight={maxHeight}>
      <div className="flex-1 px-4 flex flex-col justify-center gap-3 mb-3">
        <div className="flex w-full">
          {stage2 && <AddCustomer />}
          {stage3 && <EnrollmentCode />}
          {stage4 && <CustomerDetails handleMaxHeight={handleMaxHeight} />}
        </div>
      </div>
      <div className="flex gap-3 justify-center py-3 border-t">
        <div className="flex flex-col gap-3">
          <Buttons onClick={handleButtonFunc} primary>
            {handleButtonText()}
          </Buttons>
          {/* <button
            className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 
            px-4 py-3 rounded-lg text-white"
            onClick={handleButtonFunc}
          >
            {handleButtonText()}
          </button> */}
          {stage4 && (
            <button
              className="bg-primary_100 transition duration-500 ease-in-out px-4 py-3 
            rounded-lg text-primary_700"
              onClick={() => {}}
            >
              Update Customer Details
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default EnrollNewCustomerModal;
