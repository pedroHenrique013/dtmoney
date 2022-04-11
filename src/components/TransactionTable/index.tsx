import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionTable(){
    const {transactions} = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => ( 
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                              
                            }).format(transaction.amount)}    
                        </td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format
                            (new Date (transaction.createdAt))}    </td>
                    </tr> ))}                  
                </tbody>
            </table>

        </Container>
    );
}

function then(arg0: (data: any) => void) {
    throw new Error("Function not implemented.");
}