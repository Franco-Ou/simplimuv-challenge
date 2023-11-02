import Footer from "@components/Footer";
import Header from "../components/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
