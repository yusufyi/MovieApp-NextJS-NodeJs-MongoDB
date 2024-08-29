import MovieList from "@/components/MovieList";
import { Navbar } from "@/components/Navbar";
import { redirect } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <div className="  max-h-lvh">
      <Navbar />
      <h1 className=" ">
        {" "}
        <MovieList />
      </h1>
    </div>
  );
}
