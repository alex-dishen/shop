import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useAnimation, AnimatePresence } from 'framer-motion';
import { RootState } from 'redux/types';
import { useScrollDirection } from 'utils/customHooks';
import Cart from 'components/Cart';
import logo from 'assets/logo.png';
import { ReactComponent as Bag } from 'assets/shopping-bag.svg';
import { ReactComponent as MagnifyGlass } from 'assets/magnify.svg';
import {
  HeaderWrapper,
  InputWrapper,
  LogoWrapper,
  Logo,
  Input,
  CartWrapper,
} from './styles';

function Header() {
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { isChangeSidebar } = reduxState;
  const { isHideSidebar } = reduxState;
  const inputControls = useAnimation();
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isModifyHeader, setIsModifyHeader] = useState(false);

  // It is needed to make color change seamless when switching between pages
  useEffect(() => {
    if (location.pathname === '/games') {
      setTimeout(() => {
        setIsModifyHeader(true);
      }, 400);
    } else {
      setIsModifyHeader(false);
    }
  }, [location]);

  const setInputMacWidth = (width: number) => {
    inputControls.start({ maxWidth: width });
  };

  const openAndHideCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <>
      <HeaderWrapper
        scrollDirection={scrollDirection}
        isModifyHeader={isModifyHeader}
        isChangeSidebar={isChangeSidebar}
        isHideSidebar={isHideSidebar}
      >
        <LogoWrapper as={Link} to="/">
          <Logo src={logo} alt="Logo" />
          <div>Game Harbor</div>
        </LogoWrapper>
        <InputWrapper initial={{ maxWidth: 300 }} animate={inputControls}>
          <Input
            onFocus={() => setInputMacWidth(480)}
            onBlur={() => setInputMacWidth(310)}
          />
          <MagnifyGlass />
        </InputWrapper>
        <CartWrapper onClick={openAndHideCart}>
          <Bag />
          <div>Cart: 10</div>
        </CartWrapper>
      </HeaderWrapper>
      <AnimatePresence>
        {isOpenCart && (
          <Cart isOpenCart={isOpenCart} openAndHideCart={openAndHideCart} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
