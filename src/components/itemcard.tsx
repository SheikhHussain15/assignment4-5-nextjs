import Card from '@/components/cards';

export default function Itemcards() {
  const Cards = [
     { link: '/Deal1' , imgsrc:"/image/deal1.png", title:'Krunch Chicken Combo', description:'1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken...', rs:590,}
    ,{ link: '/Deal2' , imgsrc:"/image/deal2.png", title:'Crazy Tuesday', description:'2 pieces of Hot and Crispy Fried Chicken and Fries...', rs:390,}
    ,{ link: '/Deal3' , imgsrc:"/image/deal3.png", title:'Family Festival 3', description:'It includes 4 Zinger burgers + 4 pieces Crispy Chicken...', rs:2550,}
    ,{ link: '/Deal4' , imgsrc:"/image/deal4.png", title:'Chicken & Chips', description:'2 pieces of Hot and Crispy Fried Chicken + Fries + ...', rs:590,}
    ,{ link: '/Deal5' , imgsrc:"/image/deal5.png", title:'3 Pcs Chicken', description:'3 pieces of Hot and Crispy Fried Chicken + Drink...', rs:670,}
    ,{ link: '/Deal6' , imgsrc:"/image/deal6.png", title:'Wow Box', description:'1 Signature Zinger + 1 pc Hot & Crispy Chicken +...', rs:1020,} 
    ];

  return (
    <div className="min-h-screen p-6">
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Cards.map((cards, index) => (
          <Card key={index} link={cards.link}  imgsrc={cards.imgsrc} title={cards.title} descripton={cards.description} rs={cards.rs} />
        ))}
      </div>
    </div>
  );
}