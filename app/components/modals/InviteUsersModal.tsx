import { useDispatch } from "react-redux";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";
import Modal from ".";
import { openInviteUsersSuccModal } from "@/lib/slice/modalSlice";

function InviteUsersModal() {
  const dispatch = useDispatch();

  const inviteUser = () => {
    dispatch(setOnboardingStage(OnboardingStageArgs.Stage4));
    dispatch(openInviteUsersSuccModal());
  };

  return (
    <Modal
      heading="Invite Users"
      maxWidth="max-w-[489px]"
      maxHeight="h-[85%] max-h-[700px]"
    >
      <div className="flex-1 px-4 flex flex-col gap-3 overflow-y-auto">
        <div className="mb-4">
          <div className="mt-3">
            <label className="text-sm 2xl:text-base">Role</label>
            <input
              type="text"
              className="text-sm 2xl:text-base mt-2 block border 2xl:border-2 rounded-lg p-2 w-full 
              focus:outline focus:outline-1 focus:outline-black"
            />
            <div className="mt-3">
              <label className="text-sm 2xl:text-base">First Name</label>
              <input
                type="text"
                className="text-sm mt-2 block border 2xl:border-2
                rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm 2xl:text-base">Last Name</label>
              <input
                type="text"
                className="text-sm 2xl:text-base mt-2 block border 2xl:border-2
                rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm 2xl:text-base">Email Address</label>
              <input
                type="text"
                className="text-sm mt-2 block border 2xl:border-2 rounded-lg p-2 w-full 
                focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="my-3">
              <label className="text-sm 2xl:text-base">Phone Number</label>
              <input
                type="text"
                className="text-sm mt-2 block border 2xl:border-2 rounded-lg p-2 w-full 
                focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 border-t">
        <button
          onClick={inviteUser}
          className="bg-primary_700 transition duration-500 2xl:text-lg 
          ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white"
        >
          Invite User
        </button>
      </div>
    </Modal>
  );
}

export default InviteUsersModal;
