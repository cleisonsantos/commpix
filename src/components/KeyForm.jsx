import styled from 'styled-components'

const Form = styled.form`

`
const KeyType = styled.div`
    display: flex;
    justify-content: center;

    button{
        font-weight: bold;
        font-size: 16px;
    }
    input[type=radio] {
        height: 0;
        width: 0;
        margin: 0;
        padding: 0;
        display: none;
    }
    label{
    word-wrap: nowrap;
    height: fit-content;
    width: fit-content;
    padding: .5rem .75rem;
    margin: 0rem .25rem;
    border-radius: 4px;
    border: 1px solid #006c86;
    cursor: pointer;
    font-weight: bold;
    }
    .selectedLabel {
        background-color: #006c86;
        color: #fff;
    }
    
    
`

function KeyForm(props) {
    
    
    function handleKeyType(e) {
        
        
        //console.log(document.getElementByName(e.target.name))
        e.target.nextSibling.classList.add('selectedLabel')
    }
    return (
        <div>

            <KeyType >
                <input type="radio" name="type" id="cpf" onChange={e => handleKeyType(e)} /><label htmlFor="cpf">CPF</label>
                <input type="radio" name="type" id="cnpj" onChange={e => handleKeyType(e)} /><label htmlFor="cnpj">CNPJ</label>
                <input type="radio" name="type" id="cel" onChange={e => handleKeyType(e)} /><label htmlFor="cel">Celular</label>
                <input type="radio" name="type" id="email" onChange={e => handleKeyType(e)} /><label htmlFor="email">E-mail</label>
            </KeyType>
            <Form>
                <input type="text" placeholder="Digite sua chave " />
                <button>Adicionar chave</button>
            </Form>
        </div>
    )
}

export default KeyForm
