import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineInsights, MdOutlineContactSupport } from 'react-icons/md';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type AnalysisPackage = {
  id: string;
  title: string;
  description: string;
  details: Record<string, string>;
  deliveryTime: string;
  price: string;
};


const planesDataAnalytics = (t : any ): AnalysisPackage[] => [
  {
    id: '1',
    title: t("dataAnalysis.BasicDataAnalysis.title"),
    description:
    t("dataAnalysis.BasicDataAnalysis.description"),
    details: {
      [t("dataAnalysis.BasicDataAnalysis.details.DataCollectionAndCleaning")]: '✅',
      [t("dataAnalysis.BasicDataAnalysis.details.AdvancedExploratoryAnalysis")]: '✅',
      [t("dataAnalysis.BasicDataAnalysis.details.InteractiveDashboards")]: '✅',
      [t("dataAnalysis.BasicDataAnalysis.details.PredictiveModels")]: '✅',
      [t("dataAnalysis.BasicDataAnalysis.details.ProcessOptimizationwithData")]: '❌',
      [t("dataAnalysis.BasicDataAnalysis.details.BIToolsIntegration")]: '❌',
    },
    deliveryTime: '1 - 2 ' + t("general.weeks"),
    price: '$300 USD',
  },
  {
    id: '2',
    title: t("dataAnalysis.AdvancedDataAnalysis.title"),
    description: t("dataAnalysis.AdvancedDataAnalysis.description"),
      details: {
        [t("dataAnalysis.AdvancedDataAnalysis.details.DataCollectionAndCleaning")]: '✅',
        [t("dataAnalysis.AdvancedDataAnalysis.details.AdvancedExploratoryAnalysis")]: '✅',
        [t("dataAnalysis.AdvancedDataAnalysis.details.InteractiveDashboards")]: '✅',
        [t("dataAnalysis.AdvancedDataAnalysis.details.PredictiveModels")]: '✅',
        [t("dataAnalysis.AdvancedDataAnalysis.details.ProcessOptimizationwithData")]: '❌',
        [t("dataAnalysis.AdvancedDataAnalysis.details.BIToolsIntegration")]: '❌',
      },
    deliveryTime: '3 - 4 ' + t("general.weeks"),
    price: '$800 USD',
  },
  {
    id: '3',
    title: t("dataAnalysis.BusinessDataConsulting.title"),
    description:
    t("dataAnalysis.BusinessDataConsulting.description"),
      details: {
        [t("dataAnalysis.BusinessDataConsulting.details.DataCollectionAndCleaning")]: '✅',
        [t("dataAnalysis.BusinessDataConsulting.details.AdvancedExploratoryAnalysis")]: '✅',
        [t("dataAnalysis.BusinessDataConsulting.details.InteractiveDashboards")]: '✅',
        [t("dataAnalysis.BusinessDataConsulting.details.PredictiveModels")]: '✅',
        [t("dataAnalysis.BusinessDataConsulting.details.ProcessOptimizationwithData")]: '✅',
        [t("dataAnalysis.BusinessDataConsulting.details.BIToolsIntegration")]: '✅',
      },
    deliveryTime: '6 - 8 ' + t("general.weeks"),
    price: '$1.550 USD',
  },
];

const PlanesData = () => {
  const t = useTranslations("landingPage.servicePage");

  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        {t("dataAnalysis.titlePlans")}
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesDataAnalytics(t).map((plan, index) => (
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
              {t("general.features")}
              </h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between text-sm dark:text-white"
                  >
                    <span>{key}:</span>{' '}
                    <span className="text-gray-900 dark:text-gray-300">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <h4 className="text-md font-semibold text-gray-900 dark:text-white">
              {t("general.deliveryTime")}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {plan.deliveryTime}
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-green-600">Precio</h4>
              <p className="text-lg font-bold text-green-600">{plan.price}</p>
            </div>
            <Separator className="my-4" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              ¡Transforma tus datos en decisiones inteligentes! Contáctanos para
              más información.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                <MdOutlineInsights />
                {t("general.buy")}
              </Button>
              <Link href={'/contact'}>
                <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
                  <MdOutlineContactSupport />
                  {t("general.contact")}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default PlanesData;
