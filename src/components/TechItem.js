import React from 'react'

import PropTypes from 'prop-types'

function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button type="button" onClick={onDelete}>X</button>
        </li>
    )
}

// TechItem.defaultProps = {
//     tech: <i>Desconhecido</i>
// }

TechItem.propTypes = {
    tech: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TechItem