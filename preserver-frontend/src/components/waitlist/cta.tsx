import SubscribeForm from "@/components/subscribe-form";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="pt-12 md:pt-20 text-center border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.72),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] shadow-[inset_0_1px_0_0_--theme(--color-white/.2)] dark:shadow-none mb-12">
              <h2 className="font-inter-tight text-4xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                Become part of our community
              </h2>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
