import Modal from ".";
import { useDispatch } from "react-redux";
import {
  closeAModal,
  closeModals,
  openEnrollExistingCustomerModal,
  openEnrollNewCustomerModal,
  openRequestDeviceSuccModal,
} from "@/lib/slice/modalSlice";
import { Profile2User } from "iconsax-react";
import { useState } from "react";

function EnrollCustomerModal() {
  const dispatch = useDispatch();
  const [whatCustomer, setWhatCustomer] = useState(0);

  const profile = (customer: number) => {
    const active = whatCustomer === customer;
    return (
      <div
        className={`w-[48px] h-[48px] rounded-full ${
          active ? "bg-primary_700" : "bg-primary_100"
        } flex items-center justify-center`}
      >
        <Profile2User
          size="24"
          color={active ? "#fff" : "#0151FD"}
          variant="Bold"
        />
      </div>
    );
  };

  const handleWhatCustomer = (value: number) => {
    if (whatCustomer === value) return;
    setWhatCustomer(value);
  };

  const submitRequest = () => {
    if (whatCustomer === 0) {
      dispatch(openEnrollExistingCustomerModal());
    } else if (whatCustomer === 1) {
      dispatch(openEnrollNewCustomerModal());
    }
  };

  const heading = (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold text-xl">Customer Enrollment</h3>
      <p className="font-Poppins font-normal text-sm">
        Step <span className="text-primary_700 font-medium">1</span> of 4
      </p>
    </div>
  );

  return (
    <Modal heading={heading}>
      <div className="flex-1 px-4 flex flex-col justify-center gap-3 mb-3">
        <div>
          <p className="text-neutral_500 font-Poppins text-sm mb-4">
            Are you an Existing customer or a New customer?
          </p>
        </div>
        <div className="flex gap-3">
          <div
            className={`flex flex-1 items-center gap-3 border p-3 rounded-2xl ${
              whatCustomer === 0
                ? "border-primary_700"
                : "border-primary_100 hover:shadow-md"
            } cursor-pointer`}
            onClick={() => handleWhatCustomer(0)}
          >
            <div>{profile(0)}</div>
            <div>
              <p className="mb-2">Existing Customer</p>
              <p className="text-neutral_500 text-sm ">
                Customer already have an account with Devos
              </p>
            </div>
          </div>
          <div
            className={`flex flex-1 items-center gap-3 border p-3 rounded-2xl ${
              whatCustomer === 1
                ? "border-primary_700"
                : "border-primary_100 hover:shadow-md"
            } cursor-pointer`}
            onClick={() => handleWhatCustomer(1)}
          >
            <div>{profile(1)}</div>
            <div>
              <p className="mb-2">New Customer</p>
              <p className="text-neutral_500 text-sm">
                Customer is creating an account with Devos for the first time
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

export default EnrollCustomerModal;
