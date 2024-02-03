// pages/index.js
// import Head from "next/head";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto">
        <section id="about" className="section my-8">
          <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
          <p className="text-gray-600">
            I'm an influencer passionate about [Your Niche]. Explore my content
            and services below.
          </p>
        </section>
      </main>
    </div>
  );
}
