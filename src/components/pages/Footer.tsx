import { RectButton } from "../RectButton";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex flex-col mx-auto px-2 py-48 gap-y-12 dark:text-[#efefeb]">
      <h1 className="mx-auto font-rethink text-7xl self-center">
        Get in touch with us
      </h1>
      <div className="self-center relative">
      <input className="h-12 w-96 lg:w-[450px] border border-black self-center rounded-xl py-2 px-10 text-left border-custom text-black outline-none" type='text' placeholder="email@example.com" ></input>
      <RectButton tailwind_class="btn-secondary bg-green-secondary rounded-l-none  h-full  absolute top-0  right-0 border-black dark:border-white active:scale-100" label="Subscribe" />
      </div>
        <div className="mx-auto">
          <Link to={'/help'} ><RectButton tailwind_class="btn-secondary border bg-yellow-tertiary border-black dark:border-white" label="Need help?" /></Link>
        </div>
        <div></div>
      </div>
    // </div>
  );
};
