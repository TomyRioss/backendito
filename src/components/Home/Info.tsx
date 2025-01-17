import { Button } from '@/components/ui/button';

export const Info = () => {
  return (
    <article className=" h-2/3 w-full grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center items-center">
        <img src="https://i.ibb.co/4b2r0r3/contact-us.png" alt="Contact Us" />
      </div>
      <div className=" flex flex-col justify-center mr-20">
        <h2 className="text-2xl text-cyan-600 mb-3">
          La solución a tú problema.
        </h2>
        <h2 className="text-5xl mb-3 text-black">
          Núnca dejamos un problema sin resolver.
        </h2>
        <p className="text-xl text-black">
          Todo nuestro equipo planifica la solución a cada problema posible que
          pudiera tener tú negocio, incluso sí significa ir más allá de la
          programación, jamás va a haber un problema imposible.
        </p>
        <Button className="bg-cyan-700 text-black w-48 p-6 rounded-xl mt-10">
          <h2 className="text-lg">Contáctanos</h2>
        </Button>
      </div>
    </article>
  );
};

