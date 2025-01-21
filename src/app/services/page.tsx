import Cards from '@/app/services/cards/Cards';

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-10  text-black">
        <h2 className="text-4xl font-bold mt-20">
          Estos son nuestros servicios.
        </h2>
        <p className="text-gray-500 text-base">
          *Todos los precios son en USD, los pagos se realizan por Binance o
          Paypal.
        </p>
      </div>

      <Cards />
    </>
  );
}
