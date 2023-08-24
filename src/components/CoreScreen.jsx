import React, { useState } from 'react';
import '../styles/CoreScreen.css';

const CoreScreen = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>


          <div>
          <div className="accordion-container">
      <details className="accordion">
        <summary className="accordion-summary">Sección 1</summary>
        <div className="accordion-content">
          Contenido de la sección 1.
        </div>
      </details>

      <details className="accordion">
        <summary className="accordion-summary">Sección 2</summary>
        <div className="accordion-content">
          Contenido de la sección 2.
        </div>
      </details>

      <details className="accordion">
        <summary className="accordion-summary">Sección 3</summary>
        <div className="accordion-content">
          Contenido de la sección 3.
        </div>
      </details>
    </div>
           </div>

 
      <div className="table-container">
              <h2 className='title-table'>Tabla Comparativa</h2>
              <table className="comparison-table">
                <thead>
                  <tr>

                    <th>Opción A</th>
                    <th>Opción B</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>Tarifas</td>
                    <td>Bajas</td>
                  </tr>
                  <tr>
                    <td>Escalabilidad</td>
                    <td>Alta</td>
                  </tr>

                </tbody>
              </table>
            </div>

    </>
  );
};

export default CoreScreen;
