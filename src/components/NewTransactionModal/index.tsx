import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import closeImg from '../../assets/close.svg';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext);
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();

        await createTransaction({title, amount:value, category, type});

        onRequestClose();
    }

    return(
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-close" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioBox type="button"
                    onClick={() =>{setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button"
                    onClick={() =>{setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria"value={category} onChange={event => setCategory(event.target.value)}/>
                
                <button type="submit">Confirmar</button>
            </Container>
        </Modal>
    )
}