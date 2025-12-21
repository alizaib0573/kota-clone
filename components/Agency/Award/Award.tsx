import { Clutch, Google } from "../Common/Icons";

const Award = () => {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
        <h1 className="flex flex-col text-[3.125rem] leading-none uppercase lg:col-span-6 lg:text-[clamp(3.125rem,10.6vw,10rem)]">
          <span>Big</span>
          <span>UFS</span>
        </h1>
        <div className="col-span-6 flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-[2vw]">
          <div className="flex items-center gap-4 rounded-2xl border border-white/20 px-5 py-9">
            <div className="h-[30px] w-[90px]">
              <Google />
            </div>
            <div className="flex w-fit gap-1">
              {[...Array(5)].map((elem, index) => {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.25 12.63"
                    className="w-[13px]"
                  >
                    <path
                      fill="#ea4335"
                      d="M13.24 5.05a.616.616 0 00-.5-.72h-.03L8.94 3.8 7.21.36A.492.492 0 006.94.1a.671.671 0 00-.92.24s0 .01-.01.02L4.36 3.8l-3.77.53a.406.406 0 00-.4.2c-.26.24-.27.65-.02.9l.02.02L2.9 8.1l-.66 3.77c-.01.14.01.27.07.4.17.33.58.45.91.28 0 0 .01 0 .02-.01l3.38-1.79L10 12.54c.1.06.22.08.33.07h.13c.36-.08.6-.43.53-.79l-.66-3.77 2.71-2.65c.13-.06.2-.19.2-.34z"
                    ></path>
                  </svg>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/20 px-5 py-9">
            <div className="h-[30px] w-[90px]">
              <Clutch />
            </div>
            <div className="flex w-fit gap-1">
              {[...Array(5)].map((elem, index) => {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.25 12.63"
                    className="w-[13px]"
                  >
                    <path
                      fill="#ea4335"
                      d="M13.24 5.05a.616.616 0 00-.5-.72h-.03L8.94 3.8 7.21.36A.492.492 0 006.94.1a.671.671 0 00-.92.24s0 .01-.01.02L4.36 3.8l-3.77.53a.406.406 0 00-.4.2c-.26.24-.27.65-.02.9l.02.02L2.9 8.1l-.66 3.77c-.01.14.01.27.07.4.17.33.58.45.91.28 0 0 .01 0 .02-.01l3.38-1.79L10 12.54c.1.06.22.08.33.07h.13c.36-.08.6-.43.53-.79l-.66-3.77 2.71-2.65c.13-.06.2-.19.2-.34z"
                    ></path>
                  </svg>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
