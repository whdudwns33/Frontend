import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightGray", padding: "16px" }}>
        header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
