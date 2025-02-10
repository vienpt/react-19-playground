import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Section from "~/components/section";
import { pageHome } from "~/lang/en-US.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageHome.metadata.title },
    { name: "description", content: pageHome.metadata.description },
  ];
}

export default function Home() {
  return (
    <div className="grid gap-10">
      <h3>{pageHome.sayHello}</h3>

      <Section
        elId="react-use-api"
        docLink="https://react.dev/reference/react/use#"
        title={pageHome.sectionFetchPromise.title}
      >
        <NavLink
          to={"/fetch-promise"}
          replace
          className="hover:animate-bounce inline-block"
        >
          ⟶ {pageHome.sectionFetchPromise.tryItFetchPromise}
        </NavLink>
      </Section>
      <Section
        elId="react-use-action-form"
        docLink="https://react.dev/reference/react/useActionState"
        title={pageHome.sectionActionState.title}
      >
        <NavLink
          to={"/action-state"}
          replace
          className="hover:animate-bounce inline-block"
        >
          ⟶ {pageHome.sectionActionState.goToFormAction}
        </NavLink>
      </Section>
    </div>
  );
}
