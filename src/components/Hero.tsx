import { SearchForm } from "./SearchForm";

export function Hero() {
  return (
    <div className="min-h-screen hero flex justify-center items-center">
      <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
            Find our car here and <br />
            experience our best engine service
          </h1>
          <p className="text-slate-300 text-center">
            autocar is a car company, which acts as a seller of the newest and oldest cars,
            <br /> from sports cars to family cars. <br /> Please visit our catalog
          </p>
        </div>
        {/* Our Search Form Hero */}
        <SearchForm />
      </div>
    </div>
  );
}
