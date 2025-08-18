import React from 'react';
import './Technologies.css';
import TechGraph from '../TechGraph/TechGraph';

function Technologies() {
    return (
        <div id="technologies" className="technologies-section">
            <div className="technologies-header">
                <h2>Tecnologías</h2>
                <p>Stack tecnológico y herramientas que domino para crear soluciones innovadoras</p>
            </div>
            <TechGraph />
        </div>
    );
}

export default Technologies; 