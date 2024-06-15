import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';

const ListPirates = (props) => {
    const { removeFromDom, pirates } = props;

    return (
        <div className="container">
            {pirates.map((pirate, idx) => (
                <div key={idx} className="pirateCard">
                    <div className='card-left'>
                        <img className="pirateCard-img" alt={pirate.pirate_name} src={pirate.image_url} />
                        <p>{pirate.pirate_name}</p>
                    </div>
                    <div className='card-right'>
                        <Link className="button view-button" to={'/pirate/' + pirate._id}>View Pirate</Link>
                        <DeleteBtn pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListPirates;
