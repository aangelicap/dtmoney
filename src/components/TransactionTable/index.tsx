import { Container } from "./styles";


export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Freelancer job</td>
                        <td className="deposit">R$1.000</td>
                        <td>Trabalho</td>
                        <td>10/05/2021</td>
                    </tr>

                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$15.000</td>
                        <td>Venda</td>
                        <td>10/05/2021</td>
                    </tr>

                    <tr>
                        <td>Compra de equipamentos</td>
                        <td className="withdraw">- R$10.000</td>
                        <td>Casa</td>
                        <td>10/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}