import React from 'react';
import propTypes from 'prop-types'

function TechItem({ tech, onDelete }) {
  return (
    <li
      key={tech}>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  )
}

// Preenche propriedade vazia
TechItem.defaultProps = {
  tech: "Oculto"
}

TechItem.propTypes = {
  tech: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired
}

export default TechItem