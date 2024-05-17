"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";
import { openRequestDeviceModal } from "@/lib/slice/modalSlice";

function DevicesPage() {
  const dispatch = useDispatch();

  const handleButtonAction = useCallback(() => {
    dispatch(openRequestDeviceModal());
  }, []);

  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/devices/no_devices.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no devices assigned"
        title="No Devices Assigned Yet"
        description={`Your assigned devices will appear here. 
        DevOS Admin will allocate devices to you. Keep an eye on notifications for updates.`}
        buttonText="Request Device"
        buttonAction={handleButtonAction}
      />
    </div>
  );
}

export default DevicesPage;
