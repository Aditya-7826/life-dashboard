import GenericList from "@/components/GenericList";
import DashboardLayout from "@/components/DashboardLayout";
import GenericForm from "@/components/GenericForm";

export default function LinkedInPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        LinkedIn Growth
      </h1>

      <GenericForm
        table="linkedin_posts"
        title="Add Post"
        fields={[
          { name: "title", placeholder: "Post Title" },
          { name: "likes", placeholder: "Likes" },
        ]}
      />
      <GenericList table="linkedin_posts" />
    </DashboardLayout>
  );
}