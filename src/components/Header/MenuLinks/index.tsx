import { useRouter } from 'next/router';
import { StyledLi, StyledLink, StyledUl } from './styles';

const MenuLinks = () => {
  const router = useRouter();

  return (
    <StyledUl>
      <StyledLi>
        <StyledLink activePage={router.pathname === '/bikes'} onClick={() => router.push('/bikes')}>
          Bikes
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink activePage={router.pathname === '/accessories'} onClick={() => router.push('/accessories')}>
          Accessories
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
};

export default MenuLinks;
