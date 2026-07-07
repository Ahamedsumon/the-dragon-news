import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "./LeftAside/LeftAside";
import RightAside from "./RightAside/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>

        <section className="w-10/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-10/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-10/12 mx-auto my-3">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
