import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center py-32 px-16 ">
      <span className="text-5xl">Hola Mundo</span>
      <Link href={"/about"} className="hover:text-blue-500">About Page</Link>
    </main>
  );
}
