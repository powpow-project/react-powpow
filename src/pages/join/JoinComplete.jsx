import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const JoinComplete = () => {
  return (
    <div>
      <S.CompletionMain>
      <S.LogoBox>
          <S.LogoWrap>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </Link>
          </S.LogoWrap>
        </S.LogoBox>
        <S.Box>
            <img
                id="Check"
                style={{ marginBottom: '7px'}}
                src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`}
                alt="체크"
            />

            <S.Text>POWPOW 회원가입이 완료되었습니다.</S.Text>
            <S.Text1>
                로그인하시면 더욱 다양한 서비스를 제공받으실 수 있습니다.
            </S.Text1>
            <Link to={"/login"}>
              <S.NextButton>로그인</S.NextButton>
            </Link>
            
        </S.Box>
      </S.CompletionMain>
    </div>
  );
};

export default JoinComplete;
