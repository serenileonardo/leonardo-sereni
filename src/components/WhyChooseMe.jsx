import { Code2, Rocket, ShieldCheck } from "lucide-react";

export default function WhyChooseMe() {

  const cards = [
    {
      icon:<Code2 size={40}/>,
      title:"Design Moderno",
      text:"Interfacce professionali che valorizzano il tuo brand."
    },
    {
      icon:<Rocket size={40}/>,
      title:"Prestazioni",
      text:"Velocità e ottimizzazione su ogni dispositivo."
    },
    {
      icon:<ShieldCheck size={40}/>,
      title:"Affidabilità",
      text:"Comunicazione chiara e attenzione ai dettagli."
    }
  ];

  return (
    <section>

      <h2 className="section-title">
        Perché scegliermi
      </h2>

      <div className="cards">

        {cards.map((card,index)=>(

          <div key={index} className="glass-card">

            {card.icon}

            <h3>{card.title}</h3>

            <p>{card.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}