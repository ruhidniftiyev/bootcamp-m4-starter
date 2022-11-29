import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';
import EmblaCarousel from '../../components/Carousel/Carousel';
import FavoritesModal from '../../components/FavoritesModal/FavoritesModal';
import { useSelector } from 'react-redux';
import { getActiveValue} from '../../redux/movie/selectors';

const MainPage = () => {
  const active = useSelector(getActiveValue);
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__slider-text">
        <h2>Самые популярные части Форсаж</h2>
      </div>
      <div className="main-page__slider">
        <EmblaCarousel />
      </div>
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__movies">
            <Movies />
          </div>
        </section>
      </main>
      {active ? <FavoritesModal /> : ''}
    </div>
  );
};

export default MainPage;
