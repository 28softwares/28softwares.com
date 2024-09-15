import { Link } from "@tanstack/react-router";
import { RectButton } from "./RectButton";

export const Contact = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-12 px-2 py-48 dark:text-[#efefeb]">
      <h1 className="mx-auto self-center font-rethink text-7xl">
        Let's create something together
      </h1>
      <div className="relative self-center">
        <input
          className="h-12 w-96 self-center rounded-xl border border-black px-10 py-2 text-left  outline-none lg:w-[450px] text-lg font-extrabold text-blue-800"
          type="text"
          value="28softwaresnp@gmail.com"
        ></input>
        <RectButton
          tailwind_class="btn-primary rounded-l-none  h-full  absolute top-0  right-0 border-black dark:border-white active:scale-100"
          label="Send Email"
        />
      </div>
      <div className="mx-auto">
        <Link to={"/faq"}>
          <RectButton
            tailwind_class="btn-secondary border bg-yellow-tertiary border-black dark:border-white"
            label="Need help?"
          />
        </Link>
      </div>
      <div></div>
    </div>
    // </div>
  );
};
