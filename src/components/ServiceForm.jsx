import styled from 'styled-components'

const Form = styled.form`
    
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    
    
    /* button {
        font-size: 18px;
        padding: .5rem;
        color: #444;
        border-radius: .25rem;
        border: 1px solid #ccc;
        margin: .25rem 0;
        width: 100%;
        margin: .25rem;
    } */
    
`

function ServiceForm() {
    return (
        <div>
            <Form>
                <input type="text" placeholder="Serviço"/>
                <input type="text" placeholder="Descrição"/>
                <input type="text" placeholder="Valor"/>
                <button>Adicionar Serviço</button>
                <button>Limpar</button>
            </Form>
        </div>
    )
}

export default ServiceForm