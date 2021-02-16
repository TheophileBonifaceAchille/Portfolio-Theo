import React from "react";
import image from "../assets/sunset.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="sunset"
        className="fixed
         object-cover w-full h-full"
      />
      <section className="relative flex justify-center p-10">
        <h1 className="lg:text-9xl md:text-6xl text-4xl text-center text-gray-300 font-bold cursive leading-none lg:leading-snug self-center">
          Hello ! <br />
          Je suis Théophile.
        </h1>
      </section>
    </main>
  );
}
