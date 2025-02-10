import "./app.css";
import { Header } from "./components/header";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <main className="p-4 border-rounded max-w-7xl mx-auto m-4">
      <div className="">
        <Header />

        <Outlet />
      </div>
    </main>
  );
}
