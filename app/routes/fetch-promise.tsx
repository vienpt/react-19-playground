import { NavLink } from "react-router";
import RandomContainer from "~/features/random/random-container";
import type { Route } from "./+types/fetch-promise";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React 19 + Fetch promise" },
    {
      name: "description",
      content:
        "Fetch promise data by passing Promise as a prop from Server component to Client component",
    },
  ];
}

export default function FetchPromise() {
  return (
    <>
      <RandomContainer />
      <NavLink to={"/"} className="font-bold text-blue-400">
        Back Home
      </NavLink>
    </>
  );
}
