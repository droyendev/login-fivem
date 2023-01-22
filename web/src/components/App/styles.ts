import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background: rgba(15,15,15, .9);
`;

export const Menu = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    width: 396px;
    padding: 3rem 2.6rem;
`

export const Title = styled.h1`
    font-size: 3.2rem;
    color: #fff;
    font-weight: 800;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: none;
`

export const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 400;
    color: #E7E7E7;
`

export const InputBox = styled.div`
    border: solid 2px #505050;
    background: rgba(88, 88, 88, 0.1);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    border-radius: .4rem;
`

export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 400;
    flex: 1;

    &::placeholder {
        color: rgba(255,255,255, .26);
    }
`

export const Button = styled.button`
    flex: 1;
    padding: 1.5rem 0;
    background: #D93351;
    font-weight: 400;
    font-size: 1.6rem;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: .4rem;
`

export const Divider = styled.hr`
    width: 100%;
    border-color: #8A8A8A;
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    color: #CACACA;

    span {
        color: #fff;
        text-decoration: underline;
    }
`

export const ErrorArea = styled.div`
    border: .1rem solid #D84B4B;
    background: rgba(216, 75, 75, 0.25);
    flex: 1;
    border-radius: .4rem;
    padding: 1.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 400;
    }
`

export const ModalArea = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(22,22,22,.35);
`

export const Modal = styled.section`
    padding: 1.2rem;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background: rgba(22,22,22,.5);
    border: .1rem solid rgba(22,22,22,.9);
    border-radius: .5rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
`