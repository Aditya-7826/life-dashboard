import GenericList from "@/components/GenericList";
import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function PlacementsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Placements
      </h1>

      <GenericForm
        table="applications"
        title="Add Application"
        fields={[
          { name: "company", placeholder: "Company Name" },
          { name: "status", placeholder: "Applied / Interview / Rejected" },
        ]}
      />
      <GenericList table="applications" />
    </DashboardLayout>
  );
}