"use client";
import { useState } from "react";
import CardsContainer from "./CardsContainer";
import { DogBreedType } from "@/types/DogTypes";
import BreedCard from "@/components/BreedCard";
import FilterForm from "@/components/FilterForm";

interface Props {
  data: DogBreedType[];
}

const DogSection = ({ data }: Props) => {
  const [info, setInfo] = useState<{
    totalBreedsList: DogBreedType[];
    visibleBreedsList: DogBreedType[];
  }>({ totalBreedsList: data, visibleBreedsList: data });

  return (
    <>
      <h2 className="text-5xl">Dogs</h2>
      <FilterForm info={info} setInfo={setInfo} />
      <CardsContainer>
        {info.visibleBreedsList.length === 0 ? (
          <h2 className="text-3xl text-red-600">No breeds matching search</h2>
        ) : (
          info.visibleBreedsList.map((dog) => (
            <BreedCard
              key={dog.id}
              image={dog.image.url}
              name={dog.name}
              id={dog.id}
              value="dog"
            />
          ))
        )}
      </CardsContainer>
    </>
  );
};

export default DogSection;
