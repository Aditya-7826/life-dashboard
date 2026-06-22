import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function CertificationsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Certifications
      </h1>

      <GenericForm
        table="certifications"
        title="Add Certification"
        fields={[
          { name: "course_name", placeholder: "Course Name" },
          { name: "progress", placeholder: "Progress %" },
        ]}
      />
    </DashboardLayout>
  );
}