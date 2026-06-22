import GenericList from "@/components/GenericList";
import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function HabitsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Habits
      </h1>

      <GenericForm
        table="habits"
        title="Add Habit"
        fields={[
          { name: "habit_name", placeholder: "Habit Name" },
        ]}
      />
      <GenericList table="habits" />
    </DashboardLayout>
  );
}