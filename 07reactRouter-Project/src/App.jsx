import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index.js";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
