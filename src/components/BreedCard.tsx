import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  value: "cat" | "dog";
  id: string | number;
}

const BreedCard = ({ image, name, value, id }: Props) => {
  const route = `/${value}/${id}`;

  return (
    <Link href={route}>
      <div className="w-[300px] h-[350px] mx-auto border border-gray-300 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-all hover:scale-105">
        <div className="overflow-hidden relative w-full flex justify-center items-center h-[250px] rounded-t-lg">
          <Image
            fill
            src={image}
            sizes="250"
            priority
            alt={name}
            className="object-contain"
          />
        </div>
        <div className="bg-white p-4 text-center rounded-b-lg">
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
