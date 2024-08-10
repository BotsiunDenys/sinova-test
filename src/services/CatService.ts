import { catApi } from "@/axios";
import { CatBreedType } from "@/types/CatTypes";

// getting random info from an api is broken, data is mostly empty
// so, I get breeds randomly from breeds request based on total pages random value

export class CatApiService {
  static async getBreeds() {
    const response = await catApi.get<CatBreedType[]>(
      `breeds?limit=10&page=${Math.floor(Math.random() * 7)}`
    );
    return response;
  }
  static async getBreedInfo(id: string | number) {
    const response = await catApi.get<CatBreedType>(`breeds/${id}`);
    return response;
  }
}
