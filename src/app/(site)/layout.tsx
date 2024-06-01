import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <main
        id="skip"
        className="flex flex-col justify-center px-8 min-h-screen"
      >
        <Header />
        <Container>{children}</Container>
        <Footer />
      </main>
    </section>
  );
};

export default SiteLayout;
