import Image from "next/image";
import Modal from ".";

interface IInviteUsersModal {
  closeModal: () => void;
}

function InviteUsersModal({ closeModal }: IInviteUsersModal) {
  return (
    <Modal
      heading="Invite Users"
      closeModal={closeModal}
      maxWidth="max-w-[489px]"
      maxHeight="max-h-[90%]"
    >
      <div className="flex-1 px-4 flex flex-col gap-3  overflow-y-auto">
        <div className="mb-4">
          <div className="mt-3">
            <label className="text-sm">Role</label>
            <input
              type="text"
              className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
            />
            <div className="mt-3">
              <label className="text-sm">First Name</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm">Last Name</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm">Email Address</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="my-3">
              <label className="text-sm">Phone Number</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 border-t">
        <button className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white">
          Invite User
        </button>
      </div>
    </Modal>
  );
}

export default InviteUsersModal;