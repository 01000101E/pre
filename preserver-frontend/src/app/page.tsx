export const metadata = {
  title: "Home - ArchiveLink",
  description: "Connecting experts to preserve history, one document at a time.",
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
                      title={<><span>Preserve the Past</span><br /><span>One Document at a Time</span></>}
                      description={
                          <>
                              ArchiveLink connects skilled preservationists  
                              <br />
                              with those who need historical documents restored and digitized.
                              <br />
                              Join the waitlist today!
                          </>
                      }
                  >
                      Waitlist<span className="text-gray-300 mx-1">·</span> Launching Soon
                  </PageHeader>

                  <SubscribeForm />
              </div>
          </div>
      </section>
  );
}
