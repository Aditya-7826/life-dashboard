import DashboardLayout from "@/components/DashboardLayout";
import AnalyticsCards from "@/components/AnalyticsCards";
import WorkoutChart from "@/components/WorkoutChart";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <AnalyticsCards />

      <WorkoutChart />
    </DashboardLayout>
  );
}