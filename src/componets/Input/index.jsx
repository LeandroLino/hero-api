import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {nameAction} from '../../store/namePerson/action'
import Search from '../SearchPerson'
import TextField from '@material-ui/core/TextField';
import {Container} from './styles'
const Input = () => {
    const dispatch = useDispatch()
    const [inputValue, setInput] = useState("")
    useEffect(() => {
        dispatch(nameAction(inputValue))
    },[inputValue])
    return <Container>
        <TextField
        id="filled-basic"
        label="Super Hero Name"
        variant="filled"  
        value={inputValue}
        onChange={(e)=>setInput(e.target.value)}>
        </TextField>
        <Search/>
    </Container>
}
export default Input