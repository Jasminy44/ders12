
import "./section.css"
import ModKutusu from "./ModKutusu.jsx"


function Section() {
    return (
      <section id="mod-liste">

       <ModKutusu url="https://lipsum.app/id/15/150*150" alt="Orman Görseli" modAdi="Orman" />
       <ModKutusu url="https://lipsum.app/id/25/150*150" alt="Kamp Görseli" modAdi="Kamp" />
       <ModKutusu url="https://lipsum.app/id/35/150*150" alt="Yagmur Görseli" modAdi="Yagmur" />
       <ModKutusu url="https://lipsum.app/id/45/150*150" alt="Circir Görseli" modAdi="Circir" />
       <ModKutusu url="https://lipsum.app/id/55/150*150" alt="Sehir Görseli" modAdi="Sehir" />
       <ModKutusu url="https://lipsum.app/id/65/150*150" alt="Cafe Görseli" modAdi="Cafe" />

       
      </section>
    )
  }

  export default Section