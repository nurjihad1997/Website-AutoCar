import { MapPin, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-20 bg-slate-800 text-white">
      <div className="container flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">AutoCar</p>
          <p className="max-w-lg text-slate-300 mt-1">used and new car buying center company</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Contact</p>
          <address className="text-slate-300">
            <MapPin className="inline-block w-5 h-5 mt-2 mb-5" />
            125 Enjoy Game, Kang Rebahan, Indo
          </address>
          <address className="text-slate-300">
            <PhoneCall className="inline-block w-5 h-5 mt-2 mb-5" />
            Call Us : 012 2542 2546
          </address>
        </div>
      </div>
      <p className="text-center pt-20 pb-4 text-slate-400">Copyright &copy; AutoCar 2022 All Right Reserved</p>
    </footer>
  );
}
