import React, { useState } from 'react';
import Nav from './Nav';

const PirateForm = ({ onSubmit, errors }) => {

    const [pirate_name, setPirate_name] = useState('');
    const [image_url, setImage_url] = useState('');
    const [num_of_chests, setNum_of_chests] = useState(0);
    const [crewPosition, setCrewPosition] = useState('');
    const [catch_phrase, setCatch_phrase] = useState('');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({
            pirate_name,
            image_url,
            num_of_chests,
            crewPosition,
            catch_phrase,
            pegLeg,
            eyePatch,
            hookHand
        });
    }

    const changeLeg = () => {
        setPegLeg(!pegLeg);
    }

    const changeEye = () => {
        setEyePatch(!eyePatch);
    }

    const changeHand = () => {
        setHookHand(!hookHand);
    }

    return (
        <>
            <Nav route='/pirates' link='Crew Board' />
            
            <form className="formContainer" onSubmit={submitHandler}>
                <h1>Add Pirate</h1>
                <div>
                    <p className="formItem">
                        <label>Pirate Name:</label><br />
                        <input
                            type='text'
                            onChange={e => setPirate_name(e.target.value)}
                            value={pirate_name}
                            className={errors.pirate_name ? 'error-input' : ''}
                        />
                        {errors.pirate_name && <span className='error'>{errors.pirate_name.message}</span>}
                    </p>
                    <p className="formItem">
                        <label>Image URL:</label><br />
                        <input
                            type='text'
                            onChange={e => setImage_url(e.target.value)}
                            value={image_url}
                            className={errors.image_url ? 'error-input' : ''}
                        />
                        {errors.image_url && <span className='error'>{errors.image_url.message}</span>}
                    </p>
                    <p className="formItem">
                        <label># of chests:</label><br />
                        <input
                            type='number'
                            onChange={e => setNum_of_chests(e.target.value)}
                            value={num_of_chests}
                            className={errors.num_of_chests ? 'error-input' : ''}
                        />
                        {errors.num_of_chests && <span className='error'>{errors.num_of_chests.message}</span>}
                    </p>
                    <p className="formItem">
                        <label>Pirate Catch Phrase:</label><br />
                        <input
                            type='text'
                            onChange={e => setCatch_phrase(e.target.value)}
                            value={catch_phrase}
                            className={errors.catch_phrase ? 'error-input' : ''}
                        />
                        {errors.catch_phrase && <span className='error'>{errors.catch_phrase.message}</span>}
                    </p>
                </div>
                <div>
                    <p className="formItem">
                        <label>Position:</label><br />
                        <select
                            onChange={e => setCrewPosition(e.target.value)}
                            value={crewPosition}
                            className={errors.crewPosition ? 'error-input' : ''}
                        >
                            <option value='' disabled>Please Choose</option>
                            <option value='Captain'>Captain</option>
                            <option value='First Mate'>First Mate</option>
                            <option value='Quarter Master'>Quarter Master</option>
                            <option value='Boatswain'>Boatswain</option>
                            <option value='Powder Monkey'>Powder Monkey</option>
                        </select>
                        {errors.crewPosition && <span className='error'>{errors.crewPosition.message}</span>}
                    </p>
                    <p className="formItem checkbox">
                        <label>Peg Leg:</label><br />
                        <input
                            type='checkbox'
                            onChange={changeLeg}
                            checked={pegLeg}
                            className={errors.pegLeg ? 'error-input' : ''}
                        />
                        {errors.pegLeg && <span className='error'>{errors.pegLeg.message}</span>}
                    </p>
                    <p className="formItem checkbox">
                        <label>Eye Patch:</label><br />
                        <input
                            type='checkbox'
                            onChange={changeEye}
                            checked={eyePatch}
                            className={errors.eyePatch ? 'error-input' : ''}
                        />
                        {errors.eyePatch && <span className='error'>{errors.eyePatch.message}</span>}
                    </p>
                    <p className="formItem checkbox">
                        <label>Hook Hand:</label><br />
                        <input
                            type='checkbox'
                            onChange={changeHand}
                            checked={hookHand}
                            className={errors.hookHand ? 'error-input' : ''}
                        />
                        {errors.hookHand && <span className='error'>{errors.hookHand.message}</span>}
                    </p>
                </div>
                <input className="formButton" type='submit' value='Submit' />
                {errors.general && (
                    <div className="error-messages">
                        {errors.general.map((error, index) => (
                            <p className='error' key={index}>{error.message}</p>
                        ))}
                    </div>
                )}
            </form>
        </>
    );
};

export default PirateForm;
