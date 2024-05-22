import NLayout from "@/components/notifications/NLayout";

export const metadata = {
  title: "Vendor: Notifications and Messaging",
  description: "",
};

interface INotificationsLayout {
  children: React.ReactNode;
}

export default function NotificationsLayout({
  children,
}: INotificationsLayout) {
  return (
    <div className="flex flex-col pages">
      <NLayout />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
