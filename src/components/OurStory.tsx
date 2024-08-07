import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory() {
  return (
    <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">
      {/* Image */}
      <div>
        <div className="relative h-fit w-fit">
          <Image src="/Image-1.jpg" alt="picture" width={500} height={500} className="object-cover rounded-md" />
          <Image src="/Image-2.jpg" alt="picture" width={350} height={350} className="object-cover absolute top-1/2 left-1/2 border-4 hidden lg:block" />
        </div>
      </div>
      {/* Text */}
      <div>
        <p className="font-semibold mb-1">Our Story</p>
        <p className="text-3xl mb-2">Fastest Car, Discount, Free Service</p>
        <p className="text-muted-foreground mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis vero error consequuntur, quasi unde quo, veritatis eius, eaque voluptate aut. Iste incidunt earum, tempore labore officia temporibus voluptas id!
          <br />
          <br />
          Tempora officiis vero error consequuntur, quasi unde quo, veritatis eius, eaque voluptate aut. Iste incidunt earum, tempore labore officia temporibus voluptas id!
        </p>
        <Button>Read More</Button>
      </div>
    </div>
  );
}
