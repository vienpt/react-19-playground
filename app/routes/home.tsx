import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Section from "~/components/section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React 19 + React Router v7" },
    { name: "description", content: "Welcome to React 19" },
  ];
}

export default function Home() {
  return (
    <div className="grid gap-10">
      <h3>Hello, How are you doing?</h3>

      <Section
        elId="react-use-api"
        docLink="https://react.dev/reference/react/use#"
        title="You are in section react use API"
      >
        <NavLink
          to={"/fetch-promise"}
          replace
          className="hover:animate-bounce inline-block"
        >
          ⟶ Try it Fetch promise
        </NavLink>
      </Section>
    </div>
  );
}
