import { HiOutlineMenu } from "react-icons/hi";
import { Button } from "@/components/ui/button"


function Navbar(){
  return(
    <div className="px-4 sm:px-0 fixed top-0 left-0 w-full z-50">
      <div className="border container mx-auto flex justify-between items-center py-4 px-6 rounded-4xl bg-white shadow-md mt-4">
        <div>
          <span className="text-xl font-bold">
            <a href="">CHESTA</a>
          </span>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="#home" className="font-semibold hover:underline transition-colors">Home</a>
          <a href="#about" className="font-semibold hover:underline transition-colors">About</a>
          <a href="#skills" className="font-semibold hover:underline transition-colors">Skills</a>
          <a href="#portfolio" className="font-semibold hover:underline transition-colors">Portfolio</a>
        </div>

        <a href="#contact">
          <Button variant="outline" className="hidden md:block font-semibold rounded-3xl hover:bg-black hover:text-white transition-all">
            Contact Me
          </Button>
        </a>

        <HiOutlineMenu className="block md:hidden text-2xl" />

      </div>
    </div>

  );
}

export default Navbar;