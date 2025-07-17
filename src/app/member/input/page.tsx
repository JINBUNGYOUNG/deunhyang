"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const SignupForm = () => {
    
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <Wrapper>
            <Title>회원 가입</Title>
            <Form>
                <Row>
                    <Label>이메일 *</Label>
                    <Input 
                        type="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        required 
                    />
                </Row>

                <Row>
                    <Label>비밀번호 *</Label>
                    <div style={{ flex: 1 }}>
                        <Input 
                            placeholder='(영문 소문자 + 숫자 조합, 10글자 이상'
                            type="password" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} 
                            required 
                        />
                    </div>
                </Row>

                <Row>
                    <Label>이름 *</Label>
                    <Input
                        type='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required 
                    />
                </Row>

                <SubmitButton type="button">회원가입하기</SubmitButton>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 600px;
    max-width: calc(100% - 10px);
    margin: 0 auto;
    padding: 40px 20px;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
`;

const Form = styled.div`
    width: 100%;

    p.idcheck {
        margin-left: 136px;
        font-size: .8rem;
    }
    @media (max-width: 768px) {
        p.idcheck {
            margin-left: 0;
        }
    }
`;

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    gap: 1rem;

    div {
        display: flex;
    }

    @media (max-width: 768px) {
        div {
            width: 100%;
            display: flex;
            gap: .6rem;
        }
        flex-direction: column;
        gap: 0;
    }
`;

const Label = styled.label`
    width: 120px;
    height: 44px;
    padding-left: 10px;
    font-weight: bold;
    padding-top: 10px;
    background-color: #f2f2f2;
    font-size: .8rem;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 8px;
        padding-left: 0px;
        height: auto;
        background-color: transparent;
    }
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 0;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 14px 0;
    background-color: #333;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    margin: 2rem 0 0 0;
`;

export default SignupForm;
