import Link from "next/link";
import { propertyList } from "./Features";
import Image from "next/image";
import { StarIcon, User2, CalendarRange, CarFront } from "lucide-react";
type PropertyCardProps = (typeof propertyList)[0];

export function PropertyCard({ name, model, id, price, image, rating, year, people }: PropertyCardProps) {
  return (
    <Link href="/">
      <div className="border rounded-md overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <Image src={image} alt={name} width={400} height={420} className="w-full transition-transform hover:scale-105" />
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg font-semibold">{name}</p>
          <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
            <p className="py-2 flex items-center justify-center gap-2">
              <CalendarRange className="w-4 h-4" />
              {year}
            </p>
            <p className="py-2 flex items-center justify-center gap-2">
              <User2 className="w-4 h-4" />
              {people}
            </p>
            <p className="py-2 flex items-center justify-center gap-2">
              <CarFront className="w-4 h-4" />
              {model}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-muted-foreground">Price</p>
              <p className="font-semibold">${price}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Rating</p>
              <div className="flex gap-2 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <StarIcon fill={index < rating ? "orange" : "transparent"} color="orange" size={16} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
