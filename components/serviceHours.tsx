export default function ServiceHours() {
  return (
    <section className="bg-WhiteColor text-black">
      <div className="flex flex-col justify-between items-center py-16">
        <h1 className="text-3xl font-bold">
          Horários de atendimento
        </h1>
        <div className="bg-black text-WhiteColor rounded-md p-4 mt-4">
          <p className="font-semibold">
            Segunda a Sexta: <span className="text-goldColor">9:30</span> às <span className="text-goldColor">20:00</span>
          </p>
          <p className="font-semibold">
            Sábado e Domingo: <span className="text-goldColor">10:00</span> às <span className="text-goldColor">20:00</span>
          </p>
        </div>
        <p className="font-semibold text-sm text-gray-500 mt-2 max-w-96 text-center tracking-tight leading-4">
          Geralmente estou disponível nesses horários, caso não esteja, mande mensagem pra mim no <a className="underline text-goldColor" href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`}>whats</a>, que responderei assim que puder
        </p>
      </div>
    </section>
  )
}