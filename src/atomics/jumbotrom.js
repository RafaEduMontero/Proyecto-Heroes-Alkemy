//Reactrap
import { Container, Jumbotron } from 'reactstrap'

const Jumbotrom = ({title}) => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-4 text-center">{title}</h1>
            </Container>
        </Jumbotron>
    )
}

export default Jumbotrom
