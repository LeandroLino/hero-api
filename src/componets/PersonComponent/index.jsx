import {SobContainer,Container} from './styles'
const PersonComponent = ({props}) => {
    console.log(props)
    return <SobContainer>{props && props.map((element, index)=>(
        <Container key={index}>
            <div>{element.name}</div>
            <img src={element.image.url}></img>
        </Container>
    ))}</SobContainer>
}
export default PersonComponent