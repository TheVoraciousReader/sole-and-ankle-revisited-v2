import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from "@radix-ui/react-dialog";
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root defaultOpen={false} open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
      <Overlay/>
      <Content>
        <VisuallyHidden>
      <Dialog.Title>Menu</Dialog.Title>
      	<Dialog.Description>
					Click for menu items
				</Dialog.Description>
        </VisuallyHidden>
      <Dialog.Close asChild>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
            <VisuallyHidden>
              Dismiss menu
            </VisuallyHidden>
        </CloseButton>
      </Dialog.Close>
      <Filler />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </Content>
    </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg, 5%, 40%, 0.8);
`;

const Content = styled(Dialog.Content)`
  height: 100%;
  background: ${COLORS.white};
  position: fixed;
  top: 0;
	left: 75px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Footer = styled.footer`
  flex: 1;
  gap: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  a {
  text-decoration: none;
  color: ${COLORS.gray[700]};
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default MobileMenu;
