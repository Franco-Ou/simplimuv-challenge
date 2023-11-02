import Footer from '@components/Footer';
import Header from '../components/Header';
import { FC, ReactNode } from 'react';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
