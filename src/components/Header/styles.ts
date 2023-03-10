import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IHeaderWrapper } from 'components/Header/interfaces';

export const HeaderWrapper = styled.header<IHeaderWrapper>(
  ({ isModifyHeader, scrollDirection, isHideSidebar, isChangeSidebar }) => css`
    position: ${isModifyHeader ? 'sticky' : 'block'};
    z-index: ${!isHideSidebar && isChangeSidebar ? -1 : 2};
    top: ${scrollDirection === 'down' && isModifyHeader ? '-90px' : '0'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    gap: 20px;
    padding: 20px 40px;
    background-color: ${isModifyHeader ? 'rgb(15, 16, 17)' : 'transparent'};
    color: white;
    transition: top 0.5s;

    svg {
      height: 25px;
      width: 25px;
      fill: white;
    }

    @media (max-width: 670px) {
      gap: 16px;
    }
  `
);

export const InputWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 670px) {
    svg {
      display: none;
    }
  }
`;

export const LogoWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  font-size: 26px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 670px) {
    div {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

export const CartWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 670px) {
    svg {
      display: block;
    }

    div {
      display: none;
    }
  }
`;
