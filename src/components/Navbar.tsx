import Link from "next/link";
import { buttonVariants } from "./ui/button";
const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 left-0">
      <div className=" container flex items-center justify-between">
        <h1>University of Ghana</h1>
        <Link className={buttonVariants()} href='/login'>Sign out</Link>
      </div>
    </div>
  )
}

export default Navbar;
