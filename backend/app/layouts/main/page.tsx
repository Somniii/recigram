import Image from "next/image";
import SearchBar from "@/app/components/main/searchBar";
import UpBar from "@/app/components/main/upBar";
import Link from "next/link"
export default function Main() {
  return (
    <div className=" w-full h-full">
      <h1 className="text-color-neutral">Welcome to recipy!!</h1>
      <UpBar/>
      <SearchBar />
    </div>
  );
}
