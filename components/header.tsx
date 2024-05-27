export default function Header() {
  return (
    <header className="flex justify-between mx-auto max-w-5xl w-5/6 py-8">
      <h1 className="uppercase font-black text-2xl">John</h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <a className="font-bold hover:opacity-70 transition-all duration-300" href="#home">Ínicio</a>{/* e galeria */}
          </li>
          <li>
            <a className="font-bold hover:opacity-70 transition-all duration-300" href="#services">Serviços</a>
          </li>
          <li>
            <a className="font-bold hover:opacity-70 transition-all duration-300" href="#about">Sobre</a>{/* e reviews */}
          </li>
          <li>
            <a className="font-bold hover:opacity-70 transition-all duration-300" href="#location">Localização</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}