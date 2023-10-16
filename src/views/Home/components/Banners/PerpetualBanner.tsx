import { ArrowForwardIcon, Button, Text, Link, useMatchBreakpointsContext } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import { memo, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { perpetualImage, perpetualMobileImage, venosCoinImage } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 8.2px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: -2px;
  }
`
const Header = styled(S.StyledHeading)`
  font-size: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
  }
`

const PerpetualBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop } = useMatchBreakpointsContext()
  const { isDark } = useTheme()

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <S.StyledSubheading>{t('Venos Stakify')}</S.StyledSubheading>
          <Header width={['160px', '160px', 'auto']}>{t('Powered by Venos Project')}</Header>
          <Link href="#">
            <Button>
              <Text bold fontSize="16px" mr="4px">
                {t('Learn More Now')}
              </Text>
              <ArrowForwardIcon />
            </Button>
          </Link>
        </S.LeftWrapper>
        <RightWrapper>
          {isDesktop ? (
            <Image src={venosCoinImage} alt="PerpetualBanner" width={232} height={210} placeholder="blur" />
          ) : (
            <Image src={venosCoinImage} alt="PerpetualBanner" width={208} height={208} placeholder="blur" />
          )}
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(PerpetualBanner)
