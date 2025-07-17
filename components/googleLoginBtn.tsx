'use client';
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

interface Type {
    type: string;
}

const GoogleLoginBtn = ({type}:Type) => {
    return (
        <GoogleButton>
            <FcGoogle />
            <span className="sns_text">
                {type == 'login' ? '구글 계정으로 로그인' : '구글 계정으로 회원가입'}
            </span>
        </GoogleButton>
    )
}

const GoogleButton = styled.div`
    width: 100%;
    height: auto;

    border-radius: 8px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 2rem;
    padding: .8rem;
    background-color: #f6f7f9;
    border: 1.4px solid #222;

    font-size: .8rem;

    svg {
        position: absolute;
        left: 1rem;
        pointer-events: none;
        user-select:none;
    }

    span.sns_text {
        font-family: 'Paperlogy-4Regular';
        pointer-events: none;
        user-select:none; // 드래그 방지
        font-size: .8rem;
        word-spacing: 2px;
    }
`

export default GoogleLoginBtn;