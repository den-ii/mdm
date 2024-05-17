import Modal from "..";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import Buttons from "@/components/Button";
import { closeAModal } from "@/lib/slice/modalSlice";

interface ISuccessPopUp {
  tag: string;
  heading: string;
  successHeading: string;
  successLeading: string;
  buttonText: string;
  maxWidth?: string;
  maxHeight?: string;
}

function SuccessPopUp({
  tag,
  heading,
  successHeading,
  successLeading,
  buttonText,
  maxWidth = "max-w-[400px]",
  maxHeight = "max-h-[532px]",
}: ISuccessPopUp) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReturnToDashboard = () => {
    dispatch(closeAModal(tag));
    router.push("/");
  };

  return (
    <Modal heading={heading} maxWidth={maxWidth} maxHeight={maxHeight}>
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <div className="flex flex-1 flex-col items-center justify-center px-5 ">
          <div className="bg-primary_100 h-[65px] w-[65px] rounded-full  flex items-center justify-center">
            <Image
              src="/assets/vendor/dashboard/ftu_check.svg"
              width={40}
              height={40}
              alt="success"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-lg font-Poppins text-center font-semibold">
              {successHeading}
            </h3>
            <p className="text-[0.8rem] text-center mt-2">{successLeading}</p>
          </div>
        </div>
        <div className="flex mt-auto py-4 flex-col gap-2 items-center justify-center border-t border-l-neutral_500">
          <Buttons text={buttonText} styles="text-sm" />
          <button
            className="text-sm px-4 py-3 font-medium text-primary_700"
            onClick={handleReturnToDashboard}
          >
            Return To Dashboard
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessPopUp;
