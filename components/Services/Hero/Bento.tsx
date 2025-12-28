import Image from "next/image";

type Props = {
  bentoOneImg: string;
  bentoTwoImg: string;
  bentoThreeImg: string;
  bentoFourImg: string;
};

const Bento: React.FC<Props> = ({
  bentoOneImg,
  bentoTwoImg,
  bentoThreeImg,
  bentoFourImg,
}) => {
  return (
    <div className="mt-[3.125rem] w-full">
      <div className="grid grid-cols-2 grid-rows-4 gap-6 lg:grid-cols-4 lg:grid-rows-2 lg:gap-[2.1875rem]">
        <Image
          className="col-span-2 row-span-2 rounded-[10px] object-cover lg:rounded-2xl"
          src={bentoOneImg}
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="rounded-[10px] object-cover lg:rounded-2xl"
          src={bentoTwoImg}
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="row-span-2 rounded-[10px] object-cover lg:rounded-2xl"
          src={bentoThreeImg}
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="rounded-[10px] object-cover lg:rounded-2xl"
          src={bentoFourImg}
          alt="bento-img"
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
};

export default Bento;
