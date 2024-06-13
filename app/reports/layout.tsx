export const metadata = {
  title: "Vendor: Reports",
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
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
