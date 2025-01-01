import ImageSlider from "@/components/slider";
import Styles from "./page.module.css"; 
import Itemcards from "@/components/itemcard";

export default function Responsive() {
  return (
    <div className={`${Styles.parentcontainer}`} >
      <h1 className="text-5xl text-slate-400 font-sans font-extrabold border-y-2 border-red-500 p-1">Menu</h1>
      <div>
        <ImageSlider />
      </div>
      <div className="p-5 mt-16 bg-[url('/image/bg-6.jpg')] bg-fixed bg-cover bg-center">
        <Itemcards />
      </div>
    </div>
  );
}
