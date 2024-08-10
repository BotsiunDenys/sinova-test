"use client";
import { useState } from "react";
import CardsContainer from "./CardsContainer";
import BreedCard from "@/components/BreedCard";
import { CatBreedType } from "@/types/CatTypes";
import FilterForm from "@/components/FilterForm";

interface Props {
  data: CatBreedType[];
}

const CatSection = ({ data }: Props) => {
  const [info, setInfo] = useState<{
    totalBreedsList: CatBreedType[];
    visibleBreedsList: CatBreedType[];
  }>({ totalBreedsList: data, visibleBreedsList: data });

  return (
    <>
      <h2 className="text-5xl">Cats</h2>
      <FilterForm info={info} setInfo={setInfo} />
      <CardsContainer>
        {info.visibleBreedsList.length === 0 ? (
          <h2 className="text-3xl text-red-600">No breeds matching search</h2>
        ) : (
          info.visibleBreedsList.map((cat) => (
            <BreedCard
              key={cat.id}
              image={cat.image ? cat.image.url : ""}
              name={cat.name}
              id={cat.id}
              value="cat"
            />
          ))
        )}
      </CardsContainer>
    </>
  );
};

export default CatSection;
