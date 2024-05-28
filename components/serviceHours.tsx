export default function ServiceHours() {
  return (
    <section>
      <div className="flex flex-col justify-between items-center ">

        <div className="bg-WhiteColor text-blackColor rounded-md p-4">
          <p className="font-semibold">
            Seg a Sex: <span className="text-goldColor">9:30</span> – <span className="text-goldColor">20:00</span>
          </p>
          <p className="font-semibold">
            Sáb a Dom: <span className="text-goldColor">10:00</span> – <span className="text-goldColor">20:00</span>
          </p>
          <p className="font-semibold">
            Feriados: <span className="text-goldColor">10:00</span> – <span className="text-goldColor">20:00</span>
          </p>
        </div>
        <p className="font-semibold text-sm text-textBlack mt-2 max-w-96 text-center tracking-tight leading-4">
          Normalmente estou disponível nesses horários. Caso eu não esteja, por favor, envie uma mensagem no <a className="underline text-goldColor" href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`}>WhatsApp</a>, e responderei assim que possível.
        </p>
      </div>
    </section>
  )
}