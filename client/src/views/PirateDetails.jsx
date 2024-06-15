import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';

function PirateDetails() {

  const { id } = useParams();
  const [pirate, setPirate] = useState('');
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`)
      .then(response => {setPirate(response.data.pirate);})
      .catch(err => console.error(err));
  }, [id, update]);

console.log(pirate);

  const onCheckPegLeg = (e) => {
    axios.patch(`http://localhost:8000/api/pirates/${id}`, {
      pegLeg : !pirate.pegLeg
     })
      .then(() => setUpdate(!update))
      .catch(err => console.error(err));
  }

  const onCheckEyePatch = (e) => {
    axios.patch(`http://localhost:8000/api/pirates/${id}`, {
      eyePatch : !pirate.eyePatch 
    })
      .then(() => setUpdate(!update))
      .catch(err => console.error(err));
  }

  const onCheckHookHand = (e) => {
    axios.patch(`http://localhost:8000/api/pirates/${id}`, {
      hookHand : !pirate.hookHand})
      .then(() => setUpdate(!update))
      .catch(err => console.error(err));
  }


  return (
    <div>
      <Nav route='/pirates' link='Crew Board'/>
    <div className="pirate-details">

      <div className="pirate-leftcontent">
        <div>
          <img src={pirate.image_url} alt={pirate.name} />
          <p className="catch-phrase">"{pirate.catch_phrase}"</p>
        </div>
        </div>
        <div className='pirate-rightcontent'> 
        <div className="about-section">
          <h2>About</h2>
          <p>Name: {pirate.pirate_name}</p>
          <p>Position: {pirate.crewPosition}</p>
          <p>Treasures: {pirate.num_of_chests}</p>
          <p>
            <label>Peg Leg:</label>
            <span>{pirate.pegLeg ? "Yes" : "No"}</span>
            <button className={pirate.pegLeg ? "yes-button" : "no-button"} onClick={onCheckPegLeg}>{pirate.pegLeg ? "No" : "Yes"}</button>
          </p>
          <p>
            <label>Eye Patch:</label>
            <span>{pirate.eyePatch ? "Yes" : "No"}</span>
            <button className={pirate.eyePatch ? "yes-button" : "no-button"} onClick={onCheckEyePatch}>{pirate.eyePatch ? "No" : "Yes"}</button>
          </p>
          <p>
            <label>Hook Hand:</label>
            <span>{pirate.hookHand ? "Yes" : "No"}</span>
            <button className={pirate.hookHand ? "yes-button" : "no-button"} onClick={onCheckHookHand}>{pirate.hookHand ? "No" : "Yes"}</button>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PirateDetails;