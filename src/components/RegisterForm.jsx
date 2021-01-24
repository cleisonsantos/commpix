import styled from 'styled-components'

function RegisterForm() {
    return(
        <div>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Nome da Empresa" />
              <input type="text" placeholder="Cargo" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirmar Senha" />
              <button type="submit" >Cadastrar</button>
              <button type="reset" >Limpar</button>
            </form>
        </div>
    )
}

export default RegisterForm
