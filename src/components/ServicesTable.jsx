import styled from 'styled-components'

const Table = styled.table`

padding: .5rem 0rem;
display: flex;
justify-content: center;
width: auto;
margin-bottom: 1rem;

thead {
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #006c86;
}
th{
    padding: 0rem .5rem;
}


`

function ServicesTable(props) {
    return (
        <div>
            <Table >
                <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </Table>
        </div>
    )
}

export default ServicesTable