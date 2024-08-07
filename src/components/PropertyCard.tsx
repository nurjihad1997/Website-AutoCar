import Link from "next/link";
import { propertyList } from "./Features";
import Image from "next/image";
import { Bed, Square } from "lucide-react";
type PropertyCardProps = (typeof propertyList)[0];

export function PropertyCard({ name, model, id, price, image, rating, year, people }: PropertyCardProps) {
  return (
    <Link href="/">
      <div className="border rounded-md overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <Image src={image} alt={name} width={400} height={420} className="w-full transition-transform group-hover:scale-105" />
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg font-semibold">{name}</p>
          <div className="grid grid-cols-3">
            <p>
              <Square className="w-4 h-4" />
              {year}
            </p>
            <p>
              <Bed className="w-4 h-4" />
              {people}
            </p>
            <p>{model}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
