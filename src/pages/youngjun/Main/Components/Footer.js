import React from 'react';

const Footer = () => {
  return (
    <footer className="suggestedListFooter">
      {FOOTER_INFO_LIST.map(info => {
        return <span key={info.id}>{info.text}</span>;
      })}
    </footer>
  );
};

export default Footer;

export const FOOTER_INFO_LIST = [
  { id: 1, text: '소개' },
  { id: 2, text: ' . 도움말' },
  { id: 3, text: ' . 홍보센터' },
  { id: 4, text: ' . API' },
  { id: 5, text: ' . 채용 정보' },
  { id: 6, text: ' . 개인정보처리방침' },
  { id: 7, text: '약관' },
  { id: 8, text: ' . 위치' },
  { id: 9, text: ' . 인기 계정' },
  { id: 10, text: ' . 해시태그' },
  { id: 11, text: ' . 언어' },
];
