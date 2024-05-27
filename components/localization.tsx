export default function Localization() {

  return (
    <section id="location" className="flex flex-col items-center justify-center mx-auto max-w-5xl w-5/6 py-16">
      <h1 className="text-3xl font-bold">Localização</h1>
      <p className="text-lg mt-4"> R. Lauro Francisco dos Santos • Monte Alegre, Santa catarina - SC • 88348-595</p>
      <div className="mt-8 w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.821742345527!2d-48.67131088874965!3d-27.004184796934716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b58ff77448c7%3A0x2404ce4f39b8ff1b!2sR.%20Lauro%20Francisco%20dos%20Santos%2C%20944%20-%20Monte%20Alegre%2C%20Cambori%C3%BA%20-%20SC%2C%2088348-595!5e0!3m2!1sen!2sbr!4v1716760561964!5m2!1sen!2sbr"
          width="100%"
          height="350"
          style={{ border: "0" }}
          loading="lazy"
        >
        </iframe>
      </div>
    </section>
  )
}