import GenericList from "@/components/GenericList";
import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function GoalsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Goals
      </h1>

      <GenericForm
        table="goals"
        title="Add Goal"
        fields={[
          { name: "title", placeholder: "Goal Title" },
          { name: "progress", placeholder: "Progress %" },
        ]}
      />
      <GenericList table="goals" />
    </DashboardLayout>
  );
}