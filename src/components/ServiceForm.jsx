import styled from 'styled-components'

const Form = styled.form`
    
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    input {
        font-size: 18px;
        padding: .5rem;
        color: #444;
        border-radius: .25rem;
        border: 1px solid #ccc;
        margin: .25rem 0;
    }
    input:focus{
        border-color: #006c86;
        box-shadow: 0 0 0 0.2rem  #006b8660
    }
`

function ServiceForm() {
    return (
        <>
            <Form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </Form>
        </>
    )
}

export default ServiceForm