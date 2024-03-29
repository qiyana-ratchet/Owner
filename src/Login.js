import React, {useState} from 'react';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import styleModules from "./css/Modal.module.css"
import Button from "./component/Button";
import {useNavigate} from "react-router";

function Login() {
  const [data, setData] = useState('');
    console.log(data)

  const navigate = useNavigate();

  const responseKaKao = (res) => {
    setData(res);
    console.log(JSON.stringify(res));
    console.log("로그인 성공");
    console.log(data)
      //TODO : 백엔드 처리
    navigate(`/join`);
  };

  const responseFail = (err) => {
    alert(err);
  }

  return (
    <div>
      <KaKaoLogin
        className={styleModules.kakaoLoginButton}
        //styled component 통해 style을 입혀 줄 예정
        token={"722baf32a5e035ffc0dd6f5b61e0cd0c"}
        //카카오에서 할당받은 jsKey를 입력
        buttonText='카카오 계정으로 로그인'
        //TODO: 카카오 디자인 css 직접 수정하면 안되고 카카오 디자인가이드에서 이미지 받아와야 된다고 함
        //로그인 버튼의 text를 입력
        onSuccess={responseKaKao}
        onFailure={responseFail}
        //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
        getProfile={true}
      >
      Kakao 계정으로 로그인하기
      </KaKaoLogin>
    </div>
  );
}

const KakaoBtn = styled(KaKaoLogin)`
  padding: 200px;
  width: 800px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: red;
  border: 1px solid transparent;
  border-radius: 33px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;