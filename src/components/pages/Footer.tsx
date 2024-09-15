import { Button } from "@/UI/shadcn/ui/button";
import { Linkedin, MapPin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto w-full grid sm:grid-cols-2 gap-8 pt-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">CONTACT US</h2>
        <p>Lokanthali, Bhaktapur</p>
        <p className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Bhaktapur, Nepal
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">FOLLOW US</h2>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
      </div>

      <div className="flex  justify-center font-ubuntu pb-10 text-center">
        Copyright © 2024 | 28Softwares
      </div>
    </footer>
  );
};
