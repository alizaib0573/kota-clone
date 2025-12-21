import Form from "@/components/Contact/Form/Form";
import Hero from "@/components/Contact/Hero/Hero";
import Head from "next/head";

const AgencyPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Contact</title>
      </Head>
      <Hero />
      <Form />
    </>
  );
};

export default AgencyPage;
