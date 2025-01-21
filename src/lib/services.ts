import { useTranslations } from "next-intl";

type ServicesItemsType = {
  title: string;
  description: string;
  image: string;
};

export const services = (): ServicesItemsType[] => {
  const t = useTranslations("landingPage.ourServices.services");
  return [
    {
      title: t("ia.title"),
      description: t("ia.description"),
      image: "https://via.placeholder.com/100",
    },
    {
      title: t("web.title"),
      description: t("web.description"),
      image: "https://via.placeholder.com/100",
    },
    {
      title: t("tailored.title"),
      description: t("tailored.description"),
      image: "https://via.placeholder.com/100",
    },
    {
      title: t("infra.title"),
      description: t("infra.description"),
      image: "https://via.placeholder.com/100",
    },
    {
      title: t("data.title"),
      description: t("data.description"),
      image: "https://via.placeholder.com/100",
    },
    {
      title: t("security.title"),
      description: t("security.description"),
      image: "https://via.placeholder.com/100",
    },
  ];
};
