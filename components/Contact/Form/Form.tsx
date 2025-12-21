const Form = () => {
  const services = [
    "A new website",
    "Branding",
    "Motion graphics",
    "E-Commerce",
    "Development",
    "On-going  support",
    "App from scratch",
  ];

  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 lg:py-[10vw] 2xl:max-w-[1800px+15%]">
      <div className="lg:col-span-10">
        <div className="flex flex-col">
          <h1 className="text-fs-50">I am interested in :</h1>
          <div className="flex flex-wrap">
            {services.map((elem, index) => {
              return <p key={index}>{elem}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
