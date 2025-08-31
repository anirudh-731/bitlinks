import Image from "next/image";
import styles from "./page.module.css";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});    

export default function Home() {
  return (   
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl md:text-3xl font-bold text-center md:text-left  ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-6 mx-3 text-center">
            No clutter. No tracking. No endless sign-ups. Just effortless shortening. While others sell your clicks, we safeguard your trust. Because luxury is not about more features, it’s about the right ones. We’re not the alternative. We’re the upgrade. Welcome to the world’s most refined URL shortener. Fast. Private. Limitless. Elite.
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start md:h-auto h-[350px] relative">
          <Image className="mix-blend-darken object-contain" alt="vector image" src={"/vector.jpg"} fill={true}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </section>
    </main>
  );
}
