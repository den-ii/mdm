import { redirect } from "next/navigation";
import FTU from "./components/dashboard/FTU";

export default function IndexPage() {
  return (
    <main>
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <FTU />
    </main>
  );
}
