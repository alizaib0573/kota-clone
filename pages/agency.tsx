import Approach from "@/components/Agency/Approach/Approach";
import Award from "@/components/Agency/Award/Award";
import Hero from "@/components/Agency/Hero/Hero";
import Mission from "@/components/Agency/Mission/Mission";
import Partners from "@/components/Agency/Partners/Partners";
import Head from "next/head";

const AgencyPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Agency</title>
      </Head>
      <Hero />
      <Mission />
      <Approach />
      <Partners />
      <Award />
    </>
  );
};

export default AgencyPage;
