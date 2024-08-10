import { CatApiService } from "@/services/CatService";
import Image from "next/image";

const CatPage = async ({ params }: { params: { id: string } }) => {
  const breed = await CatApiService.getBreedInfo(params.id);

  return (
    <div className="flex items-center justify-center p-4 my-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              priority
              src={`https://cdn2.thecatapi.com/images/${breed.data.reference_image_id}.jpg`}
              alt={breed.data.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{breed.data.name}</h2>
            <p className="text-gray-700 mb-4">{breed.data.description}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Origin:</span> {breed.data.origin}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Temperament:</span>{" "}
              {breed.data.temperament}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Life Span:</span>{" "}
              {breed.data.life_span} years
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Weight:</span>{" "}
              {breed.data.weight.metric} kg / {breed.data.weight.imperial} lbs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatPage;
