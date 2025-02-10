import { NavLink } from "react-router";
import RandomContainer from "~/features/random/random-container";
import type { Route } from "./+types/fetch-promise";
import { pageFetchPromise } from "~/lang/en-US.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageFetchPromise.metadata.title },
    {
      name: "description",
      content: pageFetchPromise.metadata.description,
    },
  ];
}

export default function FetchPromise() {
  return (
    <>
      <RandomContainer />
      <NavLink to={"/"} className="font-bold text-blue-400">
        {pageFetchPromise.backHome}
      </NavLink>
    </>
  );
}
