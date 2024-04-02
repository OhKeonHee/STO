import { createGlobalStyle } from 'styled-components';
import './Assets/fonts/pretendardvariable.css'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Pretendard';
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }
  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  /* 버튼 스타일 */
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  /* 리스트 스타일 */
  ul, ol {
    list-style: none;
  }

  /* 이미지 스타일 */
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;