"use client";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";

function ReportsPage() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <FtuScreen
        imageSrc="/assets/vendor/reports/no_reports.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no reports"
        title="No Reports To Display"
        description={`Reports starts piling when you have new transactions`}
      />
    </div>
  );
}

export default ReportsPage;
