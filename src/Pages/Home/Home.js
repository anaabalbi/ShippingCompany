import React, { useContext } from 'react';
import '../../App.css';
import Cards from '../../components/CardsHome/Cards';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchModal from '../../components/SearchModal/SearchModal';
import { SearchModalContext } from '../../Provider/context-modal';

function Home() {
  const { openSearchModal } = useContext(SearchModalContext);
  return (
    <>
      <HeroSection />
      <Cards />
      {openSearchModal && <SearchModal></SearchModal>}
    </>
  );
}

export default Home;
