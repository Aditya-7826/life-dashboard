import GenericList from "@/components/GenericList";
import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function DSAPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        DSA Tracker
      </h1>

      <GenericForm
        table="dsa_problems"
        title="Add DSA Problem"
        fields={[
          { name: "title", placeholder: "Problem Name" },
          { name: "difficulty", placeholder: "Easy / Medium / Hard" },
          { name: "topic", placeholder: "Arrays / DP / Graphs" },
        ]}
      />

      <GenericList table="dsa_problems" />
    </DashboardLayout>
  );
}