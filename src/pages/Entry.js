import { useNavigate } from 'react-router-dom';
import './Entry.scss';
import Nav from '../components/Nav/Nav';

const Entry = () => {
  const navigate = useNavigate();
  const goToLogin = url => navigate(url);
  return (
    <>
      <Nav />
      <div className="Entry">
        <div className="Head">
          <h1>westagram</h1>
          <h3>프론트 최강 2조</h3>
        </div>
        <div className="infoContainer">
          <div className="info" onClick={() => goToLogin('/login-youngjun')}>
            <img
              src="https://ca.slack-edge.com/TH0U6FBTN-U03JL5NN8KW-a9ad7464a7fa-512"
              alt="profile"
            />
            <div>
              <p className="name">권영준</p>
              <p className="introduce">건강 관리 마스터</p>
            </div>
          </div>
          <div className="info" onClick={() => goToLogin('/login-chaedong')}>
            <img
              src="https://ca.slack-edge.com/TH0U6FBTN-U03JWD9BWE5-68bbaf01bf9a-512"
              alt="profile"
            />
            <div>
              <p className="name">임채동</p>
              <p className="introduce">컨플릭 마스터</p>
            </div>
          </div>
          <div className="info" onClick={() => goToLogin('/login-seulki')}>
            <img
              src="https://ca.slack-edge.com/TH0U6FBTN-U03JESEEC93-ff427e9efc70-512"
              alt="profile"
            />
            <div>
              <p className="name">최슬기</p>
              <p className="introduce">자기소개 마스터</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entry;
