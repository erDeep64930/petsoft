import Branding from "@/components/Branding";
import ContentBlock from "@/components/ContentBlock";
import PetDetails from "@/components/PetDetails";
import PetList from "@/components/PetList";
import SearchForm from "@/components/SearchForm";
import Stats from "@/components/Stats";
import React from "react";

const page = () => {
  return (
    <main className="">
      <div className="flex justify-between items-center text-white py-8">
        <Branding />
        <Stats />
      </div>
      <div className="grid grid-cols-3 grid-rows-[45px_1fr] gap-4 h-[600px]">
        {/* search box */}
        <div className="row-start-1 row-span-1 col-start-1 col-span-1">
          <SearchForm />
        </div>
        {/* pet list */}
        <div className="row-start-2 row-span-full col-start-1 col-span-1 ">
          <ContentBlock>
            <PetList />
          </ContentBlock>
        </div>
        {/* pet details */}
        <div className="row-start-1 row-span-full col-start-2 col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
};

export default page;
