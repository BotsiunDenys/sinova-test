import { BreedImageType, SizeType } from "./CommonBreedTypes";

export interface DogBreedType {
  weight: SizeType;
  height: SizeType;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  image: BreedImageType;
}
