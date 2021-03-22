import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import PersonComponent from '../PersonComponent'
const Search = () => {
    const name = useSelector((state)=>state.name)
    const [persons, setPersons] = useState([])

    const getPerson = (name) => {
        fetch(`https://www.superheroapi.com/api.php/1932984713523688/search/${name}`)
        .then((data) => data.json())
        .then((data) => {
            setPersons(data.results)
        })
    }
    useEffect(()=>{
        getPerson(name)
    },[name])
    return <div><PersonComponent props={persons}/></div>
}
export default Search