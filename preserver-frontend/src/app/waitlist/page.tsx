export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import PageHeader from "@/components/waitlist/page-header";
import SubscribeForm from "@/components/waitlist/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="The software that sparks your imagination"
            description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
          >
            Waitlist v1 <span className="text-gray-300 mx-1">·</span> Coming
            Soon
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
