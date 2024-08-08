import { PropertyCard } from "./PropertyCard";

export const propertyList = [
  {
    id: "pro__1",
    name: "Mercedes Benz C Class C200",
    price: 150000,
    rating: 4,
    year: 2009,
    people: 2,
    model: "Sedan",
    image: "/Pic-1.jpg",
  },
  {
    id: "pro__2",
    name: "Mercedes Benz AMG_STR",
    price: 500000,
    rating: 4,
    year: 2021,
    people: 2,
    model: "Sedan",
    image: "/Pic-2.jpg",
  },
  {
    id: "pro__3",
    name: "BMW M4",
    price: 71000,
    rating: 4,
    year: 2019,
    people: 2,
    model: "Sedan",
    image: "/Pic-3.jpg",
  },
  {
    id: "pro__4",
    name: "Toyota GT86",
    price: 60000,
    rating: 3,
    year: 2012,
    people: 2,
    model: "Sedan",
    image: "/Pic-4.jpg",
  },
  {
    id: "pro__5",
    name: "Ferrari LaFerrari",
    price: 900000,
    rating: 5,
    year: 2013,
    people: 2,
    model: "Sedan",
    image: "/Pic-5.jpg",
  },
  {
    id: "pro__6",
    name: "Lamborghini Aventador",
    price: 250000,
    rating: 4,
    year: 2020,
    people: 2,
    model: "Sedan",
    image: "/Pic-6.jpg",
  },
  {
    id: "pro__7",
    name: "Shelby GT350R",
    price: 66000,
    rating: 3,
    year: 2018,
    people: 2,
    model: "Sedan",
    image: "/Pic-7.jpg",
  },
  {
    id: "pro__8",
    name: "Porsche 911 GT3RS",
    price: 320000,
    rating: 4,
    year: 2019,
    people: 2,
    model: "Sedan",
    image: "/Pic-8.jpg",
  },
  {
    id: "pro__9",
    name: "Skyline Nissan GTR",
    price: 170000,
    rating: 4,
    year: 2007,
    people: 2,
    model: "Sedan",
    image: "/Pic-9.jpg",
  },
];

export function Features() {
  return (
    <div className="container pb-20">
      <h3 className="text-4xl text-center mb-2">Catalog Car</h3>
      <p className="text-center text-muted-foreground">our company provides a wide variety of the worlds best and fastest cars even in the limited edition category. are you curious? please come to our store</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertyList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
