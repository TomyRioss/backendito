import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <article className="bg-blue-900 h-2/3 w-full grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center ml-20">
        <h2 className="text-2xl text-cyan-300 mb-3">
          La solución a tú problema.
        </h2>
        <h2 className="text-5xl mb-3 text-white">
          Núnca dejamos un problema sin resolver.
        </h2>
        <p className="text-xl text-white">
          Todo nuestro equipo planifica la solución a cada problema posible que
          pudiera tener tú negocio, incluso sí significa ir más allá de la
          programación, jamás va a haber un problema imposible.
        </p>
        <Button className="bg-cyan-300 text-black w-48 p-6 rounded-xl mt-10">
          <h2 className="text-lg">Contáctanos</h2>
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <img src="https://i.ibb.co/4b2r0r3/contact-us.png" alt="Contact Us" />
      </div>
    </article>
  );
};

