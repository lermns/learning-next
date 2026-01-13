import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-34">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
