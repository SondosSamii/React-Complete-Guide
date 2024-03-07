import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center my-8 md:mb-16">
      <img src={logo} alt="A canvas" className="w-44 h-44 object-contain mb-8" />
      <h1 className="font-pacifico font-semibold uppercase text-2xl md:text-4xl text-[#9a3412] tracking-[0.4em]">
        ReactArt
      </h1>
      <p className="text-[#a39191]">A community of artists and art-lovers.</p>
    </header>
  );
}
