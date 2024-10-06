import image from "@/public/careers/webdev.webp";
import CareerPage from "@/app/(root)/(routes)/career/_components/career-page";

const ChooseACareerWebDev = async () => {
  const heading = "Desenvolvimento Web";
  const description =
    "Desenvolvimento web é o desenvolvimento de sites na internet. O profissional que trabalha desenvolvendo websites pode ser um web designer (desenvolvedor do layout) ou um web developer (desenvolvedor de sistemas).";

  return (
    <CareerPage
      heading={heading}
      description={description}
      image={image}
      slug="webdev"
    />
  );
};

export default ChooseACareerWebDev;
