import ServiceForm from '../components/ServiceForm'
import ServicesTable from '../components/ServicesTable'

function Services() {
    return(
        <>
            <h2>Cadastrar serviços:</h2>
            <ServiceForm />
            <h2>Serviços Adicionados:</h2>
            <ServicesTable />
        </>
    )
}

export default Services