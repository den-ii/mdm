"use client";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";

function DevicesPage() {
  const dispatch = useDispatch();

  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/notification/no_notification.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no notification"
        title="No Notification To Display"
        description={`Anticipate alerts and updates here as your journey unfolds.`}
      />
    </div>
  );
}

export default DevicesPage;
