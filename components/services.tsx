export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-center pt-16 pb-12 bg-black text-WhiteColor">
      <h2 className="text-3xl font-bold mb-8">
        Lista de serviços
      </h2>
      <div className="flex flex-col gap-4">

        <div className="flex justify-between gap-2 items-end">
          <p className="text-lg">Corte de cabelo</p>
          <p className="text-sm text-gray-500">
            ...............................................................
          </p>
          <p className="text-lg text-goldColor">R$ 25,00</p>
        </div>

        <div className="flex justify-between gap-2 items-end">
          <p className="text-lg">Barba</p>
          <p className="text-sm text-gray-500">
            ......................................................................................
          </p>
          <p className="text-lg text-goldColor">R$ 25,00</p>
        </div>

        <div className="flex justify-between gap-2 items-end">
          <p className="text-lg">Cabelo + Barba</p>
          <p className="text-sm text-gray-500">
            ................................................................
          </p>
          <p className="text-lg text-goldColor">R$ 50,00</p>
        </div>

        <div className="flex justify-between gap-2 items-end">
          <p className="text-lg">Sobrancelha</p>
          <p className="text-sm text-gray-500">
            ........................................................................
          </p>
          <p className="text-lg text-goldColor">R$ 25,00</p>
        </div>
      </div>
    </section>
  )
}