import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { useState } from 'react';
import Modal from 'react-modal'
interface HeaderPropsimport
{
    OnIsOpened:() => void;
}
export function Header({OnIsOpened}: HeaderPropsimport){

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button onClick={OnIsOpened}>Nova Transferencia</button>
            </Content>
        </Container>
        
    );
};