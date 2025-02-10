import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("routes/home.tsx"),
    route("fetch-promise", "routes/fetch-promise.tsx"),
    route("action-state", "routes/action-state.tsx"),
  ]),
] satisfies RouteConfig;
