/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex overflow-hidden relative flex-col self-stretch pt-20 w-full text-center text-white min-h-[747px] max-md:max-w-full">
        <img alt=""
          loading="lazy"
          srcSet="/assets/image/top.png?width=200 200w, /assets/image/top.png?width=400 400w, /assets/image/top.png?width=800 800w, /assets/image/top.png?width=1200 1200w, /assets/image/top.png?width=1600 1600w, /assets/image/top.png?width=2000 2000w, /assets/image/top.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center px-16 py-20 mt-64 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col mt-28 w-full max-w-[1077px] max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl leading-[64px] max-md:max-w-full max-md:text-4xl">
              Lorem ipsum dolor sit amet, consec
            </div>
            <div className="self-center mt-7 text-xl leading-6 max-md:max-w-full">
              Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique
              erat in ligula consequat malesuada. Praesent posuere vestibulum
              neque ac posuere. {process.env.wordpressAPIUrl}
            </div>
          </div>
        </div>
      </div>
      <img alt=""
        loading="lazy"
        src="/assets/image/diamond.png"
        className="mt-20 aspect-square w-[66px] max-md:mt-10"
      />
      <div className="mt-7 text-4xl leading-10 text-center text-neutral-900 max-md:max-w-full">
        Aenean vulputate quis est et pulvinar.
      </div>
      <div className="mt-6 text-xl leading-6 text-center text-neutral-900 w-[830px] max-md:max-w-full">
        Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum
        nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed
        facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis
        aliquam. Sed facilisis nec ipsum nec{" "}
      </div>
      <a href="#contact">
        <div className="justify-center px-5 py-3 mt-12 text-base font-bold leading-6 text-center bg-white rounded-sm border border-pink-900 border-solid text-neutral-900 max-md:mt-10">
          About us
        </div>
      </a>

      <a href="https://www.youtube.com/watch?v=Y7VZ-krWvlE" target="_blank">
        <img alt=""
          loading="lazy"
          srcSet="/assets/image/seadrill.png?width=100 100w, /assets/image/seadrill.png?width=200 200w, /assets/image/seadrill.png?width=400 400w, /assets/image/seadrill.png?width=800 800w, /assets/image/seadrill.png?width=1200 1200w, /assets/image/seadrill.png?width=1600 1600w, /assets/image/seadrill.png?width=2000 2000w, /assets/image/seadrill.png"
          className="mt-14 w-full aspect-[1.92] max-w-[1042px] max-md:mt-10 max-md:max-w-full"
        /></a>


      <div className="flex overflow-hidden relative flex-col gap-5 self-stretch pr-20 pl-10 mt-40 w-full min-h-[733px] max-md:hidden max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img alt="" loading="lazy" srcSet="/assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=100 100w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=200 200w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=400 400w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=800 800w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=1200 1200w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=1600 1600w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=2000 2000w, /assets/image/train.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&" className="object-cover absolute inset-0 size-full">
        </img>
        <div className="relative flex-auto max-md:max-w-full" style={{ height: 733 }}><div className="w-full" style={{ height: 733 }}><div className="w-full" style={{ height: 633 }}>
          <div className="flex relative h-full flex-col  max-md:mt-10 max-md:max-w-full" style={{ height: 733 }}>

            <div className="flex gap-5 pb-0 mb-0 justify-between items-end ml-5 max-w-full w-full max-md:flex-wrap" style={{ height: 633 }}>

              <a href="#contact">
                <div className="flex group/item hover:bg-darker pb-0 mb-0 flex-col mt-20 max-md:mt-10">
                  <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 bg-plus group-hover/item:bg-plus-white"></div>
                  <div className="px-2 text-2xl font-bold leading-7 text-white max-md:mt-10">Financial statements</div>

                  <div className="px-2 pb-10 invisible group-hover/item:visible" style={{ width: 300 }}>
                    <span>
                      Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
                      porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
                      purus libero, Morbi purus libero, elementum nec</span>
                  </div>

                </div>
              </a>

              <div className="shrink-0 self-start w-px  h-[126px]"></div>

              <a href="#contact">
                <div className="flex group/item hover:bg-darker pb-0 mb-0 flex-col mt-20 max-md:mt-10" style={{}}>
                  <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 bg-plus group-hover/item:bg-plus-white"></div>
                  <div className="px-2 text-2xl font-bold leading-7 text-white max-md:mt-10">Press releases</div>

                  <div className="px-2 pb-10 invisible group-hover/item:visible" style={{ width: 300, }}>
                    <span>
                      Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
                      porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
                      purus libero, Morbi purus libero, elementum nec</span>
                  </div>

                </div>
              </a>

              <div className="shrink-0 self-start w-px  h-[126px]"></div>

              <a href="#contact">
                <div className="flex group/item hover:bg-darker pb-0 mb-0 flex-col mt-20 max-md:mt-10" style={{}}>
                  <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 bg-plus group-hover/item:bg-plus-white"></div>
                  <div className="px-2 text-2xl font-bold leading-7 text-white max-md:mt-10">Webcast links</div>

                  <div className="px-2 pb-10 invisible group-hover/item:visible" style={{ width: 300, }}>
                    <span>
                      Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
                      porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
                      purus libero, Morbi purus libero, elementum nec</span>
                  </div>

                </div>
              </a>

              <div className="shrink-0 self-start w-px  h-[126px]"></div>

              <a href="#contact">
                <div className="flex group/item hover:bg-darker pb-0 mb-0 flex-col mt-20 max-md:mt-10" style={{}}>
                  <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 bg-plus group-hover/item:bg-plus-white"></div>
                  <div className="px-2 text-2xl font-bold leading-7 text-white max-md:mt-10">Corporate governance</div>

                  <div className="px-2 pb-10 invisible group-hover/item:visible" style={{ width: 300, }}>
                    <span>
                      Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
                      porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
                      purus libero, Morbi purus libero, elementum nec</span>

                  </div>

                </div>
              </a>

            </div>
          </div>
        </div>
        </div>
        </div>
      </div>


      <div className="flex flex-col px-12 pt-20 pb-10 mt-20 w-full bg-cyan-950 max-md:visible mob-train  lg:hidden">
        <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 mob-plus-white"></div>
        <div className="px-2 text-2xl font-bold leading-7 text-white">
          Financial statements
        </div>
        <div className="px-2 mt-6 text-base font-medium leading-6 text-white">
          Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
          porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
          purus libero, Morbi purus libero, elementum nec
        </div>
      </div>
      <div className="flex flex-col px-12 pt-20 pb-10 w-full bg-cyan-950 max-md:visible mob-train lg:hidden">
        <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 mob-plus-white"></div>
        <div className="px-2 text-2xl font-bold leading-7 text-white">
          Press releases
        </div>
        <div className="px-2 mt-6 text-base font-medium leading-6 text-white">
          Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
          porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
          purus libero, Morbi purus libero, elementum nec
        </div>
      </div>
      <div className="flex flex-col px-12 pt-20 pb-10 w-full bg-cyan-950 max-md:visible mob-train lg:hidden">
        <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 mob-plus-white"></div>
        <div className="px-2 text-2xl font-bold leading-7 text-white">
          Webcast links
        </div>
        <div className="px-2 mt-6 text-base font-medium leading-6 text-white">
          Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
          porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
          purus libero, Morbi purus libero, elementum nec
        </div>
      </div>
      <div className="flex flex-col items-start px-12 pt-20 pb-10 w-full bg-cyan-950 max-md:visible mob-train lg:hidden">
        <div className="mb-10 flex gap-0 items-start px-6 py-5 w-33  max-md:pr-5 mob-plus-white"></div>
        <div className="px-2 text-2xl font-bold leading-7 text-white">
          Corporate governance
        </div>
        <div className="px-2 self-stretch mt-5 text-base font-medium leading-6 text-white">
          Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
          porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
          purus libero, Morbi purus libero, elementum nec
        </div>
      </div>


      <div className="flex flex-col mt-36 w-full max-w-[1085px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img alt="" loading="lazy"
                srcSet="/assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=100 100w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=200 200w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=400 400w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=800 800w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=1200 1200w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=1600 1600w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&width=2000 2000w, /assets/image/tower.png?apiKey=291a64a5a9fa4fb7a3b36e7b90f2540c&"
                className="grow w-full aspect-[0.87] max-md:mt-10 max-md:max-w-full"></img>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto text-base font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl max-md:max-w-full">Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.</div>
                <div className="mt-9 leading-6 max-md:max-w-full">Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam eget sem placerat vestibulum. Donec consectetur ut leo quis feugiat. </div>
                <div className="mt-6 font-medium leading-6 max-md:max-w-full">Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut ligula vitae,
                  fringilla dictum sem. Donec tempus blandit nulla vel auctor. Donec non vestibulum tellus,
                  sit amet condimentum felis. Maecenas scelerisque elit a lectus consequat tincidunt. </div>
                <a href="#contact">
                  <div className="justify-center self-start px-9 py-6 mt-9 text-center text-white bg-pink-900 max-md:px-5">Read about operations</div>
                </a>
              </div>
            </div>
          </div>
        </div>









      </div>


      <div className="mt-36 w-full bg-hand max-md:bg-none">
        <div className="pd-200 flex flex-col mt-36 w-full  max-md:mt-10 max-md:w-full max-md:pr-0">

          <form className="flex  flex-col self-end px-12 pt-12 pb-20 max-md:w-full mt-64 max-w-full text-sm text-white bg-slate-800 w-[435px] max-md:px-5 max-md:mt-10">
            <div id="contact">Any questions?</div>
            <div className="mt-4 text-3xl font-bold leading-7">Let’s talk today!</div>

            <input type="text" required placeholder="Name" className="px-6 py-5 mt-6 whitespace-nowrap bg-black rounded border border-black border-solid text-slate-100 max-md:px-5"></input>
            <input type="email" required placeholder="Email" className="px-6 py-5 mt-6 whitespace-nowrap bg-black rounded border border-black border-solid text-slate-100 max-md:px-5"></input>
            <textarea required placeholder="Message" className="px-6 py-5 mt-6 h-28 bg-black rounded border border-black border-solid text-slate-100 max-md:px-5"></textarea>
            <input type="submit" value="Submit" className="shrink-0 mt-6 mb-2.5 h-10 bg-white rounded cl-black" >
            </input>
          </form>

        </div>
      </div>

    </div>
  );
}
