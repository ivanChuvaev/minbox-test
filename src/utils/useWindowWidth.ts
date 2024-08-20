import { useLayoutEffect, useState } from "react";
import styles from './useWindowWidth.module.scss';

const tStyles = styles as {
  laptop: string;
  tablet: string;
  sTablet: string;
  lMobile: string;
  mMobile: string
  sMobile: string;
}

export function useWindowWidth() {
  const [sizes, setSizes] = useState({
    isLaptop: false,
    isTablet: false,
    isSTablet: false,
    isLMobile: false,
    isMMobile: false,
    isSMobile: false,
  })

  useLayoutEffect(() => {
    const resizeHandler = () => {
      setSizes({
        isLaptop: window.matchMedia(`(min-width: ${tStyles.laptop})`).matches,
        isTablet: window.matchMedia(`(max-width: ${tStyles.laptop})`).matches,
        isSTablet: window.matchMedia(`(max-width: ${tStyles.tablet})`).matches,
        isLMobile: window.matchMedia(`(max-width: ${tStyles.sTablet})`).matches,
        isMMobile: window.matchMedia(`(max-width: ${tStyles.lMobile})`).matches,
        isSMobile: window.matchMedia(`(max-width: ${tStyles.sMobile})`).matches
      })
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  return sizes;
}