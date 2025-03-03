import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] shadow-[0_1px_0_0_--theme(--color-white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-8">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              ArchiveLink. Empowering individuals by helping them protect and preserve their valuable documents. <br />
              <span className="font-medium text-indigo-500">Built by William and Evie</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

