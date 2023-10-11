import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="text-blue-500 text-2xl">Hola mundo</h1>
    </main>
  );
}
