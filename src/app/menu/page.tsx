'use client'
import ImageSlider from "@/components/slider";
import Styles from "./page.module.css";
import Itemcards from "@/components/itemcard";
import Footer from "@/components/footer";

export default function Responsive() {
  return (
    <div className={`${Styles.parentcontainer}`}>
      <h1 className="text-5xl sm:text-3xl text-slate-400 font-sans font-extrabold border-y-2 border-red-500 p-1 text-center">
        Menu
      </h1>
      <div className="mt-4">
        <ImageSlider />
      </div>
      <div className="p-5 mt-16 bg-[url('/image/bg-6.jpg')] bg-fixed bg-cover bg-center">
        <Itemcards />
      </div>
      <div>
        <Footer />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .${Styles.parentcontainer} {
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
            padding: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
