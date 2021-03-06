import Modal from 'react-modal'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from "../../assets/close.svg"
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
interface NewTransationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransacrionModal({ isOpen, onRequestClose }: NewTransationModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction (event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            type,
            category,
        });

        setTitle('');
        setAmount(0);
        setType('');
        setCategory('');
        
        onRequestClose();
    }


    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Valor"
                onChange={event => setAmount(Number(event.target.value))}
                value={amount === 0 ? '' : amount }
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    onClick={ () => { setType('deposit'); }}
                    isActive = {type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>
                        Entrada
                    </span>

                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={ () => { setType('withdraw');}}
                    isActive = {type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>
                        Saída
                    </span>

                </RadioBox>


            </TransactionTypeContainer>

            <input
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
    )
}