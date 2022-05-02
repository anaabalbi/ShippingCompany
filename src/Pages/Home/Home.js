import React, { useContext } from 'react';
import '../../App.css';
import Cards from '../../components/CardsHome/Cards';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchModal from '../../components/SearchModal/SearchModal';
import { SearchModalContext } from '../../Provider/context-modal';

function Home() {
  const { openSearchModal } = useContext(SearchModalContext);
  return (
    <>
      <HeaderHome></HeaderHome>
      <HeroSection />
      <Cards />
      {openSearchModal && <SearchModal></SearchModal>}
      <Footer></Footer>
    </>
  );
}

export default Home;
