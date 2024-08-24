import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../CSS/Begonia.css'; // Update to the correct CSS file for begonias

function Begonia({ begonia }) {
    return (
        <Link to={`/begonias/${begonia.id}`}>
            <div className="Begonia">
                <div className='begonia_img'>
                    {/* find good begonia photos for below */}
                    <span>
                        <img src={`public/images/${begonia.name}.png`} alt={begonia.name} /> 
                    </span>
                </div>
                <div className='begonia_details'>
                    <p className="begonia_name">{begonia.name}</p>
                    <p className="begonia_category">{begonia.category}</p>
                </div>
            </div>
        </Link>
    );
}

Begonia.propTypes = {
    begonia: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        // add other begonia properties if needed - I don't think I need another one yet.
    }).isRequired
}

export default Begonia;
