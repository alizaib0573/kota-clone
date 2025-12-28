import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const BrandingPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Services</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Enabling <span className="font-bold">brand mavericks</span> since
              2013.
            </>
          }
          mainImageSrc="/services/branding/main.webp"
          description="Shaping brand identities that the world wants to see more of."
          bentoOneImg="/services/branding/bento/0.webp"
          bentoTwoImg="/services/branding/bento/1.webp"
          bentoThreeImg="/services/branding/bento/3.webp"
          bentoFourImg="/services/branding/bento/2.webp"
          naviData={[
            "Branding",
            "Brand strategy",
            "Tone of voice",
            "Visual identity",
          ]}
        />
        <Intro />
        <Service />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default BrandingPage;
