import React, { useState,  } from 'react';
import api from "../services/api"
import styled from 'styled-components'

const Form = styled.form`

`

function RegisterForm() {

	const initialFormState = {
		name: '',
		email: '',
		company: '',
		office: '',
		password: '',
		conf_password: ''
	}

	// const [input, setInput] = useState('')

	const [form, setForm] = useState(initialFormState)

	const setInput = (newValue) => {
		setForm(form => ({ ...form, ...newValue }))
	}


	const handleRegister = e => {
		e.preventDefault();

		api.post('/users', form).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})

	}


	return(
		<div>
		<Form onSubmit={handleRegister}>
		<input name="name" type="text" placeholder="Nome" onChange={e => setInput({ name: e.target.value })}/>
		<input name="email" type="email" placeholder="E-mail" onChange={e => setInput({ email: e.target.value })}/>
		<input name="company" type="text" placeholder="Nome da Empresa" onChange={e => setInput({ company: e.target.value })}/>
		<input name="office" type="text" placeholder="Cargo" onChange={e => setInput({ office: e.target.value })}/>
		<input name="password" type="password" placeholder="Senha" onChange={e => setInput({ password: e.target.value })}/>
		<input name="conf_password" type="password" placeholder="Confirmar Senha" onChange={e => setInput({ conf_password: e.target.value })}/>
		<button type="submit" >Cadastrar</button>
		<button type="reset" >Limpar</button>
		</Form>
		</div>
	)
}
export default RegisterForm
