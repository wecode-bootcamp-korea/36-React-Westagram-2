import { useEffect, useState } from 'react';

function User() {
  const [userInfoList, setUserInfoList] = useState([]);
  console.log(userInfoList);
  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(res => res.json())
      .then(result => setUserInfoList(result));
  }, []);

  return (
    <div>
      User
      {userInfoList.map(userInfo => {
        return (
          <ul key={userInfo.id}>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li>{userInfo.phone}</li>
            <br />
          </ul>
        );
      })}
      {/* <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul> */}
    </div>
  );
}

export default User;
