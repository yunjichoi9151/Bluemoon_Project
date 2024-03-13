import { createGlobalStyle } from 'styled-components';
import NanumBarunGothic from '../assets/fonts/NanumBarunGothic.woff';
import NanumBarunGothicBold from '../assets/fonts/NanumBarunGothicBold.woff';
import NanumBarunGothicLight from '../assets/fonts/NanumBarunGothicLight.woff';
import NanumBarunGothicUltraLight from '../assets/fonts/NanumBarunGothicUltraLight.woff';
import NanumGothic from '../assets/fonts/NanumGothic.woff';
import NanumGothicBold from '../assets/fonts/NanumGothicBold.woff';
import NanumGothicExtraBold from '../assets/fonts/NanumGothicExtraBold.woff';
import NanumGothicLight from '../assets/fonts/NanumGothicLight.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'NanumBarunGothic';
    src: local('NanumBarunGothic') url(${NanumBarunGothic}) format('woff');
  }

  @font-face {
    font-family: 'NanumBarunGothicBold';
    src: local('NanumBarunGothicBold') url(${NanumBarunGothicBold}) format('woff');
  }

  @font-face {
    font-family: 'NanumBarunGothicLight';
    src: local('NanumBarunGothicLight') url(${NanumBarunGothicLight}) format('woff');
  }

  @font-face {
    font-family: 'NanumBarunGothicUltraLight';
    src: local('NanumBarunGothicUltraLight') url(${NanumBarunGothicUltraLight}) format('woff');
  }

  @font-face {
    font-family: 'NanumGothic';
    src: local('NanumGothic') url(${NanumGothic}) format('woff');
  }

  @font-face {
    font-family: 'NanumGothicBold';
    src: local('NanumGothicBold') url(${NanumGothicBold}) format('woff');
  }

  @font-face {
    font-family: 'NanumGothicExtraBold';
    src: local('NanumGothicExtraBold') url(${NanumGothicExtraBold}) format('woff');
  }

  @font-face {
    font-family: 'NanumGothicLight';
    src: local('NanumGothicLight') url(${NanumGothicLight}) format('woff');
  }
`;
