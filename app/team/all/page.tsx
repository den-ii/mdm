"use client";
import FtuScreen from "@/components/ftu_screen";
import { openInviteUsersModal } from "@/lib/slice/modalSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

function TeamAllPage() {
  const dispatch = useDispatch();

  const handleButtonAction = useCallback(() => {
    dispatch(openInviteUsersModal());
  }, []);
  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/team/no_team.svg"
        imageWidth={190}
        imageHeight={190}
        imageAlt="no user added"
        title="No User Added"
        description={`No user added yet. Begin by inviting members.`}
        buttonText="Invite New Users"
        buttonAction={handleButtonAction}
      />
    </div>
  );
}

export default TeamAllPage;
