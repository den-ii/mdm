import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { closeAModal } from "@/lib/slice/modalSlice";
import Modal from "..";
import Buttons from "@/components/button";

function InviteUsersPopUp({}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReturnToDashboard = () => {
    dispatch(closeAModal("inviteUsersSuccess"));
    router.push("/");
  };

  return (
    <Modal
      heading={"Invitation Sent"}
      maxWidth={"max-w-[442px]"}
      maxHeight={"max-h-[376px]"}
    >
      <div className="flex-1 flex flex-col justify-center px-5">
        <div className="flex gap-3 items-center py-3 px-4 rounded-lg bg-primary_100 ">
          <Image src="/assets/check.svg" width={24} height={24} alt="success" />
          <p className="text-sm">Your initation was sent successfully.</p>
        </div>
      </div>
      <div className="flex mt-auto py-4 px-3 flex-col gap-2 items-center justify-center border-t border-l-neutral_500">
        <Buttons text={"Done"} styles="text-sm block w-full max-w-[200px]" />
        <button
          className="text-sm px-4 py-3 font-medium text-primary_700"
          onClick={handleReturnToDashboard}
        >
          Return To Dashboard
        </button>
      </div>
    </Modal>
  );
}

export default InviteUsersPopUp;
