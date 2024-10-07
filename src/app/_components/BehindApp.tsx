"use client";

export function BehindApp() {
  return (
    <div
      className="hidden border-2 border-black bg-[#A6FAFF] text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] sm:text-xl"
      id="behind-app"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#app")?.classList.remove("hidden");
          document.querySelector("#behind-app")?.classList.add("hidden");
        }}
        className="h-full w-full p-4"
      >
        <p>Created by Ethan Coward © 2024</p>
        <br />
        <p>Click here to re-open the site</p>
        <br />
        <p>
          Like what you see? Check out my other projects, have a look at my
          GitHub profile (CDE90), or send me an email at hello@ethancoward.dev
        </p>
      </button>
    </div>
  );
}
