import image from "../assets/home-cinema-animate.svg";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[77vh] gap-5 p-4 bg-slate-100 dark:bg-gray-800">
      <img src={image} className="md:w-1/2" />
    </main>
  );
}
