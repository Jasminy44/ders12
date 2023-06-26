
function Header() {
   const uygulamaAdi = "ModApp"
    console.log("merhaba");
    return (
      <header className="flex-kutu">
        <h1>{uygulamaAdi}</h1>
        <p>Iletisim Bilgileri</p>
      </header>
    )
  }
  export default Header