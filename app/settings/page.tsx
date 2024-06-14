import { redirect } from "next/navigation";

function page() {
  redirect("/settings/account");
}

export default page;
