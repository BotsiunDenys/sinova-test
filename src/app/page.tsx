import BreedCard from "@/components/BreedCard";
import CardsContainer from "@/sections/CardsContainer";
import CatSection from "@/sections/CatSection";
import DogSection from "@/sections/DogSection";
import { CatApiService } from "@/services/CatService";
import { DogApiService } from "@/services/DogService";

const Home = async () => {
  const dogs = await DogApiService.getBreeds();
  const cats = await CatApiService.getBreeds();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 gap-8">
      <DogSection data={dogs.data} />
      <CatSection data={cats.data} />
    </main>
  );
};

export default Home;
