"use client";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";

function MessagesPage() {
  const dispatch = useDispatch();

  return (
    <div className="flex-1 flex">
      <FtuScreen
        imageSrc="/assets/vendor/notification/no_notification.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no notifications"
        title="No Message To Display"
        description={`Anticipate alerts and updates here as your journey unfolds.`}
        buttonText="Compose Message"
      />
    </div>
  );
}

export default MessagesPage;
