import { redirect } from "next/navigation";

function AuthPage() {
  redirect("/auth/login");
}

export default AuthPage;
