import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart, MdOutlineMessage } from "react-icons/md";

// Datos dinámicos para los planes
const planesData = [
  {
    id: "7",
    title: "Web Sencilla",
    description:
      "Ideal para pequeños proyectos, marcas personales con funcionalidades básicas.",
    details: {
      "Integración Ecommerce": "❌",
      "Optimización SEO": "❌",
      "Diseño Responsivo": "✅",
      "Dominio Incluido": "❌",
      "Integración de Redes Sociales": "✅",
      "Soporte Multilenguaje": "❌",
      "Backup Automático": "❌",
    },
    pages: "1",
    deliveryTime: "3 - 5 Días",
    price: "$150 USD",
    support: "1 mes",
  },
  {
    id: "8",
    title: "Web Premium",
    description:
      "Perfecta para negocios que buscan escalar su presencia en línea, vender productos y gestionar inventarios.",
    details: {
      "Integración Ecommerce": "✅",
      "Optimización SEO": "✅",
      "Diseño Responsivo": "✅",
      "Dominio Incluido": "✅",
      "Integración de Redes Sociales": "✅",
      "Soporte Multilenguaje": "❌",
      "Backup Automático": "❌",
    },
    pages: "4",
    deliveryTime: "7 - 14 Días",
    price: "$500 USD",
    support: "3 meses",
  },
  {
    id: "9",
    title: "Web Empresarial",
    description:
      "Ideal para negocios consolidados que buscan un sitio profesional con funcionalidades avanzadas, diseño atractivo y SEO perfeccionado.",
    details: {
      "Integración Ecommerce": "✅",
      "Optimización SEO": "✅",
      "Diseño Responsivo": "✅",
      "Dominio Incluido": "✅",
      "Integración de Redes Sociales": "✅",
      "Soporte Multilenguaje": "✅",
      "Backup Automático": "✅",
    },
    pages: "6+",
    deliveryTime: "31 Días",
    price: "$1,200 USD",
    support: "6 meses",
  },
];

const Planes = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Nuestros Planes de Desarrollo
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Características
              </h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between text-sm dark:text-gray-300"
                  >
                    <span>{key}:</span>{" "}
                    <span className="text-gray-900 dark:text-gray-300">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-4" />
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">
              Cantidad de Páginas
            </h4>
            <h4 className="text-md text-gray-900 dark:text-gray-100">
              {plan.pages}
            </h4>
            <Separator />
            <h4 className="text-md font-bold text-gray-800 dark:text-gray-200">
              Soporte Incluido
            </h4>
            <h4 className="mt-2 text-gray-900 dark:text-gray-100">
              {plan.support}
            </h4>
            <Separator />
            <h4 className="text-md font-bold text-gray-800 dark:text-gray-200">
              Plazo de Entrega
            </h4>
            <h4 className="text-md text-gray-900 dark:text-gray-100">
              {plan.deliveryTime}
            </h4>
            <Separator />
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Precio
            </h4>
            <h4 className="text-lg text-green-500">{plan.price}</h4>
            <div className="grid grid-flow-col grid-cols-2 justify-center items-center w-full mt-10 gap-4 ">
              <Button>
                <MdOutlineShoppingCart />
                Comprar
              </Button>
              <Button>
                <MdOutlineMessage />
                Contactar
              </Button>
            </div>
          </div>
        ))}
      </article>
      <Separator />
    </section>
  );
};

export default Planes;
