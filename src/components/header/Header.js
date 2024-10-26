import styled from 'styled-components';
import { Logo } from './Logo';
import FilterFields from './FilterFields';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FilterFields />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
