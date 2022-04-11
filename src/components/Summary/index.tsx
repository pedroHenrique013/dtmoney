import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }

        else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;

    } ,{
        deposits:0,
        withdraws:0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entrada"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                              
                    }).format(summary.deposits)}
                </strong>
            </div>
            
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Joing"/>
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                              
                    }).format(summary.withdraws)}
                </strong>
            </div>
            
            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Joing"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                              
                    }).format(summary.total)}
                </strong>
            </div>
            
        </Container>
    );
}
