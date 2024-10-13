import Link from "next/link";
import Navigation from "./components/navigation";
import Header from "./components/header";

const Home = () => {
  return (
    <>
      <nav>
        <Navigation />
        <Header />
      </nav>
    </>
  );
};
export default Home;
