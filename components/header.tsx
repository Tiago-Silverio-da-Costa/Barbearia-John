import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-WhiteColor">
      <div className="flex justify-between mx-auto max-w-5xl w-5/6 py-8">
        <h1 className="uppercase text-black font-black text-2xl">John</h1>
        {/* TODO: fazer toggle menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#services">Serviços</Link>
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#about">Sobre</Link>{/* e reviews */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}