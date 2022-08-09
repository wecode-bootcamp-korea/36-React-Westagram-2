import './Copywriter.scss';

const Copywriter = () => {
  return (
    <div className="copywriter_wrapper">
      {COPYWRITER.map(info => (
        <span key="1" className="copywriter">
          {info}
        </span>
      ))}
    </div>
  );
};

export default Copywriter;

const COPYWRITER = [
  'Westagram',
  '정보',
  '·지원',
  '·홍보 센터',
  '·API',
  '·채용 정보',
  '·개인정보처리방침',
  '·약관',
  '·디렉터리',
  '·프로필',
  '·해시태그',
  '·언어',
  '© 2022 WESTAGRAM',
];

// const COPYWRITER = [
//   {
//     id: 1,
//     text: 'Westagram 정보·지원·홍보 센터·API·채용 정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어',
//     company: '© 2022 WESTAGRAM',
//   },
// ];
