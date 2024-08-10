import { dogApi } from "@/axios";
import { DogBreedType } from "@/types/DogTypes";

// getting random info from an api is broken, data is mostly empty
// so, I get breeds randomly from breeds request based on total pages random value

export class DogApiService {
  static async getBreeds() {
    const response = await dogApi.get<DogBreedType[]>(
      `breeds?limit=10&page=${Math.floor(Math.random() * 17)}`
    );
    return response;
  }
  static async getBreedInfo(id: string | number) {
    const response = await dogApi.get<DogBreedType>(`breeds/${id}`);
    return response;
  }
}
