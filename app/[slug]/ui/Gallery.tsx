import Image from "next/image";
import Wrapper from "../components/Wrapper";

export default () => {
  return (
    <Wrapper title="Gallery" tags={["tailwindcss", "framer motion"]}>
      <div className="relative h-[315px] w-[508px]">
        <button className="absolute left-0">
          <div className="relative h-[315px] w-[420px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/1.webp"
              alt="flowers"
              fill
              className="object-cover"
            />
          </div>
        </button>
        <button className="absolute right-0 top-1/4">
          <div className="relative right-0 h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/gallery/2.webp"
              alt="flowers"
              fill
              className="object-cover"
            />
          </div>
        </button>
        <button className="absolute right-0 top-1/2">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/gallery/3.webp"
              alt="flowers"
              fill
              className="object-cover"
            />
          </div>
        </button>
        <button className="absolute right-0">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/gallery/4.webp"
              alt="flowers"
              fill
              className="object-cover"
            />
          </div>
        </button>
      </div>
    </Wrapper>
  );
};
