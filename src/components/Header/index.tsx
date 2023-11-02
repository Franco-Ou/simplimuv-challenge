import Image from 'next/image';
import { StyledHeader } from './styles';
import React, { FC } from 'react';
import { FlexDivBetween, StyledCenteredContainer } from '../../styles/Globals/Containers';
import MenuLinks from './MenuLinks';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledCenteredContainer>
        <FlexDivBetween>
          <Image
            src='/images/logo.webp'
            alt='SimpliMuv Logo'
            width={168}
            height={34}
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
          <MenuLinks />
        </FlexDivBetween>
      </StyledCenteredContainer>
    </StyledHeader>
  );
};

export default Header;
