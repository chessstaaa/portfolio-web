import { HiOutlineMenu } from "react-icons/hi";
import { Button } from "@/components/ui/button"


function Navbar(){
  return(
    <div className="px-4 sm:px-0 fixed top-0 left-0 w-full z-50">
      <div className="border container mx-auto flex justify-between items-center py-4 px-6 rounded-4xl bg-white shadow-md mt-4">
        <div>
          <span className="text-xl font-bold">
            CHESTA
          </span>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="" className="font-semibold hover:underline">Home</a>
          <a href="/about" className="font-semibold hover:underline">About</a>
          <a href="" className="font-semibold hover:underline">Skills</a>
          <a href="" className="font-semibold hover:underline">Portfolio</a>
        </div>

        <Button variant="outline" className="hidden md:block font-semibold rounded-3xl hover:bg-black hover:text-white">Contact Me</Button>

        <HiOutlineMenu className="block md:hidden text-2xl" />

      </div>
    </div>

  );
}

export default Navbar;