import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const WebDesignAndDevelopmentPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Services</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Welcome to the <span className="font-bold">digital</span>{" "}
              renaissance.
            </>
          }
          mainImageSrc="/services/hero/main.webp"
          description=" Crafting the future of websites with enjoyably-creative and
          technologically-advanced design and development."
          bentoOneImg="/services/bento/0.webp"
          bentoTwoImg="/services/bento/1.webp"
          bentoThreeImg="/services/bento/3.webp"
          bentoFourImg="/services/bento/2.webp"
          naviData={[
            "Web design & development",
            "Creative web design",
            "Web development",
            "E-Commerce",
            "WordPress",
            "Copywriting",
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

export default WebDesignAndDevelopmentPage;
