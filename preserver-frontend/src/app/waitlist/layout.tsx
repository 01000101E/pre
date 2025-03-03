"use client";

import BgShapes from "@/components/waitlist/bg-shapes";
import VerticalLines from "@/components/waitlist/vertical-lines";
import Header from "@/components/waitlist/ui/header";
import Footer from "@/components/waitlist/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalLines />
      <BgShapes />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
