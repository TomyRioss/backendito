import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <article className="bg-blue-900 dark:bg-blue-950 w-full py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div className="flex flex-col justify-center text-center lg:text-left lg:ml-6 xl:ml-20">
          <h2 className="text-xl lg:text-2xl text-cyan-300 mb-3">
            La solución a tú proyecto.
          </h2>
          <h2 className="text-3xl lg:text-5xl mb-3 text-white">
            Núnca dejamos un problema sin solucionar.
          </h2>
          <p className="text-lg lg:text-xl text-white">
            Nuestro equipo no cree que exista problema imposible, siempre
            encontramos la forma de arreglarnosla para resolver cualquiér
            inconveniente, incluso si significa ir más allá de la programación.
          </p>
          <Link href={'/services'}>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-400 hover:bg-blue-500 w-40 lg:w-48 py-3 lg:py-6 rounded-xl mt-6 text-base lg:text-lg">
                Soluciones
              </button>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]  rounded-full flex items-center justify-center">
            <Image
              src={'/teamworkers.svg'}
              alt="contact"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
