"use client";

import React from "react";

import { companies, achievements } from "@/data";
import { InfiniteMovingCards } from "./ui/InifiniteMovingCards";

const Clients = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Achievements</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-72 max-w-32 gap-2 justify-center items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-20 w-10"
                />
                <p className="text-xl font-bold tracking-wide">
                  {company.name}
                </p>
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
