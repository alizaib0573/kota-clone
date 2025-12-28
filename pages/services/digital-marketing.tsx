import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const DigitalMarketing = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Services</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Show them who you <span className="font-bold">really are.</span>
            </>
          }
          mainImageSrc="/services/digital-marketing/main.webp"
          description="Create an instantly recognisable, unique visual identity that tells your customers who you are and leaves a lasting impression."
          bentoOneImg="/services/digital-marketing/bento/0.webp"
          bentoTwoImg="/services/digital-marketing/bento/1.webp"
          bentoThreeImg="/services/digital-marketing/bento/3.webp"
          bentoFourImg="/services/digital-marketing/bento/2.webp"
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

export default DigitalMarketing;
