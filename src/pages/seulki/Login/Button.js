const Button = ({ id, pw, buttonStatus, goToMain }) => {
  const test = () => {
    fetch('http://10.58.0.32:3000/users/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: id, password: pw }),
    }).then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', response.accessToken);
        alert('로그인 성공');
      } else if (response.status === 400) {
        alert('아이디 혹은 비밀번호를 확인 해 주세요');
      }
      return response.json();
    });
    // .catch(error => console.log(error));
  };

  return (
    <button
      className={buttonStatus(id, pw) ? 'login_btn' : 'login_btn_disabled'}
      onClick={test}
      disabled={buttonStatus(id, pw) ? false : true}
    >
      로그인
    </button>
  );
};

export default Button;
