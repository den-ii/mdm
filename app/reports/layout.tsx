export const metadata = {
  title: "Vendor: Reports",
  description: "",
};

interface NotificationsLayoutProps {
  children: React.ReactNode;
}

export default function NotificationsLayout({
  children,
}: NotificationsLayoutProps) {
  return (
    <div className="flex flex-col pages">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
