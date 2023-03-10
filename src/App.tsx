import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from 'components/Header';
import Home from 'pages/Home';
import Games from 'pages/Games';
import Game from 'pages/Game';
import 'styles/normalize.scss';
import 'font/fonts.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/game" element={<Game />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
