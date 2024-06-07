import Modal from "..";
import { useDispatch } from "react-redux";
import {
  closeAModal,
  openRequestDeviceSuccModal,
} from "@/lib/slice/modalSlice";
import { Profile2User } from "iconsax-react";

function EnrollExistingCustomerModal() {
  const dispatch = useDispatch();

  const submitRequest = () => {
    dispatch(openRequestDeviceSuccModal());
  };

  const heading = (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-xl">Existing Customer Enrollment</h3>
      <p className="font-Poppins font-normal text-sm mb-3">
        Step <span className="text-primary_700 font-medium">2</span> of 4
      </p>
    </div>
  );
  return (
    // <Modal heading="Existing Customer Enrollment">
    <Modal heading={heading}>
      <div className="flex-1 px-4 flex flex-col justify-center gap-3 mb-3">
        <div>
          <p className="text-neutral_500 font-Poppins text-sm mb-4">
            Are you an Existing customer or a New customer?
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-3 border border-primary_700 p-3 rounded-2xl cursor-pointer hover:shadow-md">
            <div>
              <div className="w-[48px] h-[48px] rounded-full bg-primary_700 flex items-center justify-center">
                <Profile2User size="24" color="#fff" variant="Bold" />
              </div>
            </div>
            <div>
              <p className="mb-2">Existing Customer</p>
              <p className="text-neutral_500 text-sm ">
                Customer already have an account with Devos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border p-3 rounded-2xl border-primary_100 cursor-pointer hover:shadow-md">
            <div>
              <div className="w-[48px] h-[48px] rounded-full bg-primary_100 flex items-center justify-center">
                <Profile2User size="24" color="#0151FD" variant="Bold" />
              </div>
            </div>
            <div>
              <p className="mb-2">New Customer</p>
              <p className="text-neutral_500 text-sm">
                Customer is creating an account with devos for the first time
              </p>
            </div>
          </div>
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

export default EnrollExistingCustomerModal;
