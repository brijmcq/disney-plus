import { PlayIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

type Props = {
  variant:
    | { name: "primary"; type: "play" | "save" }
    | { name: "secondary"; children: ReactNode };
};

const Button = ({ variant }: Props) => {
  if (variant.name === "secondary") return <button>{variant.children}</button>;

  return (
    <button
      className={`${
        variant.type === "play" ? "max-w-96 w-full" : ""
      } h-12 rounded bg-neutral-800 px-4`}>
      <div className="mx-auto flex w-min items-center gap-2">
        {variant.type === "play" ? (
          <>
            <PlayIcon className="h-6 w-6 fill-typography-light" />
            <span className="whitespace-nowrap font-semibold">Watch now</span>
          </>
        ) : null}
        {variant.type === "save" ? (
          <PlusSmallIcon className="h-6 w-6 fill-typography-light" />
        ) : null}
      </div>
    </button>
  );
};

export default Button;
