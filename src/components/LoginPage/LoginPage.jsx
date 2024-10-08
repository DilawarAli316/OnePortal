/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import LoginMethods from "./LoginMethods";
import ImageSection from "./ImageSection";
import Footer from "./Footer";

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col items-start px-10 py-11 bg-white max-md:px-5">
      {/* <Header /> */}
      <section className="mt-0 w-full  max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <LoginMethods />
          <ImageSection />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default LoginPage;
