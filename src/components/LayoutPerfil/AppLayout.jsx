import { Outlet } from "react-router-dom";
import Navbar from "../NavbarPerfil/Navbar.jsx";
import { Container } from "./AppLayout-styled.jsx";

const AppLayout = () => {
  return (
    <Container>
      <div className="AppLayout">
        <Navbar />
        <Outlet />
      </div>
    </Container>
  );
};

export default AppLayout;
