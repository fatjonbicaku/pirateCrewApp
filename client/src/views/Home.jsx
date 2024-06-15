import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListPirates from '../components/ListPirates';
import Nav from '../components/Nav';

const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    axios.get('http://localhost:8000/api/pirates/')
        .then(res => {setPirates(res.data.pirates); setLoaded(true); console.log(res);})
        .catch( err => console.log('Error getting all pirates', err));
    }, [loaded]);

    const removeFromDom = authorId => {
        setPirates(pirates.filter( pirate => pirate._id !== authorId))
    }

    return (
    <>
        <Nav route='/pirate/new' link='Add Pirate'/>
        <ListPirates removeFromDom={removeFromDom} pirates={ pirates } />
    </>
    )
}

export default Main