import Modal from "..";
import { useDispatch } from "react-redux";
import {
  closeAModal,
  openRequestDeviceSuccModal,
} from "@/lib/slice/modalSlice";
import { Backward, Profile2User } from "iconsax-react";
import AddCustomer from "./AddCustomer";

function EnrollNewCustomerModal() {
  const dispatch = useDispatch();

  const submitRequest = () => {
    dispatch(openRequestDeviceSuccModal());
  };

  return (
    <Modal heading="Enroll Customer">
      <div className="flex-1 px-4 flex flex-col justify-center gap-3 mb-3">
        <div className="flex gap-2 items-center">
          <div className="cursor-pointer">
            <Backward size="24" color="#0151FD" variant="Bold" />
          </div>
          <p className="font-Poppins text-sm">
            Step <span className="text-primary_700">2</span> of 3
          </p>
        </div>
        <div className="flex w-full">
          <AddCustomer />
        </div>
      </div>
      <div className="flex justify-center py-3 border-t">
        <button
          className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white"
          onClick={submitRequest}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
}

export default EnrollNewCustomerModal;
