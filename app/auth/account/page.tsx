import { redirect } from "next/navigation";

function AccountPage() {
  redirect("/auth/login");
}

export default AccountPage;
