import envelopeIcon from '../assets/EnvelopeSimple.png';

const Contact = () => {
  return (
    <section className="relative flex items-center justify-center p-12 md:p-24 text-white bg-no-repeat bg-cover bg-[url(../assets/contact-us-bg.png)]">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between p-8 rounded-lg">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold">Contact us</h2>
          <h5 className="text-xl opacity-80 mt-2">Lorem ipsum dolor sit amet consectetur.</h5>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row p-4 justify-between items-center rounded-lg bg-[rgba(255,255,255,0.10)] backdrop-blur-md">
          <div className="w-full md:w-3/5 flex items-center gap-4 mb-4 md:mb-0">
            <img src={envelopeIcon} alt="Envelope Icon" className="w-6 h-6" />
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full p-2 text-white bg-transparent border-none text-lg placeholder:text-[rgba(255, 255, 255, 0.40)]"
            />
          </div>
          <button className="w-full md:w-auto flex justify-center items-center p-4 md:px-8 bg-[#0F1922] hover:bg-[#1a2a33] text-white text-lg font-normal rounded-lg transition-colors duration-300">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;