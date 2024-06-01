import Footer from "@/components/footer";
import Header from "@/components/header";
import Container from "@/components/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            404 – Page not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            It seems you've found something that used to exist, or you spelled
            something wrong. I'm guessing you spelled something wrong. Can you
            double check that URL?
          </p>
          <Link href="/">Return Home</Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}
