import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart, MdOutlineMessage } from "react-icons/md";
import { useTranslations } from "next-intl";

type DetailsPlans = {
  id: string;
  title: string;
  description: string;
  details: Record<string, string>;
  pages: string;
  deliveryTime: string;
  price: string;
  support: string;
};

const planesData = (t: (key: string) => string): DetailsPlans[] => [
  {
    id: "7",
    title: t("webDevelopment.simpleWeb.title"),
    description: t("webDevelopment.simpleWeb.description"),
    details: {
      [t("webDevelopment.details.ecommerceIntegration")]: "❌",
      [t("webDevelopment.details.seoOptimization")]: "❌",
      [t("webDevelopment.details.responsiveDesign")]: "✅",
      [t("webDevelopment.details.domainIncluded")]: "❌",
      [t("webDevelopment.details.socialMediaIntegration")]: "✅",
      [t("webDevelopment.details.multilanguageSupport")]: "❌",
      [t("webDevelopment.details.automaticBackup")]: "❌",
    },
    pages: "1",
    deliveryTime: "3 - 5 " + [t("general.days")],
    price: "$150 USD",
    support: "1 " + [t("general.month")],
  },
  {
    id: "8",
    title: t("webDevelopment.premiumWeb.title"),
    description: t("webDevelopment.premiumWeb.description"),
    details: {
      [t("webDevelopment.details.ecommerceIntegration")]: "✅",
      [t("webDevelopment.details.seoOptimization")]: "✅",
      [t("webDevelopment.details.responsiveDesign")]: "✅",
      [t("webDevelopment.details.domainIncluded")]: "✅",
      [t("webDevelopment.details.socialMediaIntegration")]: "✅",
      [t("webDevelopment.details.multilanguageSupport")]: "❌",
      [t("webDevelopment.details.automaticBackup")]: "❌",
    },
    pages: "4",
    deliveryTime: "7 - 14 " + [t("general.days")],
    price: "$500 USD",
    support: "3 " + [t("general.months")],
  },
  {
    id: "9",
    title: t("webDevelopment.businessWeb.title"),
    description: t("webDevelopment.businessWeb.description"),
    details: {
      [t("webDevelopment.details.ecommerceIntegration")]: "✅",
      [t("webDevelopment.details.seoOptimization")]: "✅",
      [t("webDevelopment.details.responsiveDesign")]: "✅",
      [t("webDevelopment.details.domainIncluded")]: "✅",
      [t("webDevelopment.details.socialMediaIntegration")]: "✅",
      [t("webDevelopment.details.multilanguageSupport")]: "✅",
      [t("webDevelopment.details.automaticBackup")]: "✅",
    },
    pages: "6+",
    deliveryTime: "31 " + [t("general.days")],
    price: "$1,200 USD",
    support: "6 " + [t("general.months")],
  },
];

const Planes = () => {
  const t = useTranslations("landingPage.servicePage");

  return (
    <section className="w-full px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold flex justify-center items-center text-gray-800 dark:text-gray-200">
        {t("webDevelopment.titlePlans")}
      </h2>

      <article className="grid grid-cols-3 gap-4 mt-10">
        {planesData(t).map((plan) => (
          <div
            key={plan.id}
            className="p-4 border border-gray-300 rounded shadow grid gap-6 bg-white dark:bg-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {plan.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
            <Separator />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t("webDevelopment.features")}
            </h3>
            <ul className="mt-2 grid gap-2">
              {Object.entries(plan.details).map(([key, value]) => (
                <li key={key} className="flex justify-between dark:text-gray-300">
                  <span>{key}:</span>
                  <span className="text-xl text-gray-800 dark:text-gray-300">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <Separator />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t("webDevelopment.pages")}
            </h3>
            <h4 className="mt-2 text-gray-900 dark:text-gray-100">{plan.pages}</h4>
            <Separator />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t("webDevelopment.support")}
            </h3>
            <h4 className="mt-2 text-gray-900 dark:text-gray-100">{plan.support}</h4>
            <Separator />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t("general.deliveryTime")}
            </h3>
            <h4 className="mt-2 text-gray-900 dark:text-gray-100">
              {plan.deliveryTime}
            </h4>
            <Separator />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t("general.price")}
            </h3>
            <h4 className="mt-2 text-green-500 text-xl">{plan.price}</h4>
            <div className="grid grid-flow-col grid-cols-2 justify-center items-center w-full mt-10 gap-4">
              <Button>
                <MdOutlineShoppingCart />
                {t("general.buy")}
              </Button>
              <Button>
                <MdOutlineMessage />
                {t("general.contact")}
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
