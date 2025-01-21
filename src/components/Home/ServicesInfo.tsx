import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const ServicesInfo = () => {
  const t = useTranslations("landingPage.ourServices.servicesInfo");
  return (
    <div className="bg-blue-800 text-white py-16 px-10 flex items-center justify-center">
      <div className="grid grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Sección del gráfico */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gráfico"
            className="w-full max-w-sm"
          />
        </div>
        {/* Sección del texto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-yellow-500 text-lg uppercase font-semibold mb-3">
            {t("join")}
          </h2>
          <h3 className="text-4xl font-bold mb-6">{t("getStarted")}</h3>
          <p className="text-gray-300 text-lg mb-6">{t("contactUs")}</p>
          <Button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
            {t("startNow")}
          </Button>
        </div>
      </div>
    </div>
  );
};
