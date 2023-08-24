import React, { useState, useEffect } from 'react';
import '../../styles/ChannelSimulator.css';
import * as d3 from 'd3';

function ChannelSimulator() {
    const [channelOpened, setChannelOpened] = useState(false);
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [openingFees, setOpeningFees] = useState(0);

    useEffect(() => {
        if (channelOpened) {
            createGraph();
        }
    }, [channelOpened]);

    const openChannel = () => {
        // Simulación de apertura del canal aquí
        setChannelOpened(true);
    };

    const createGraph = () => {
        const svg = d3.select('#channel-graph');
        svg.selectAll('*').remove(); // Limpia el contenido previo del gráfico

        // Ejemplo de nodos y conexiones
        const nodes = [
            { id: 'UserA' },
            { id: 'UserB' },
            { id: 'UserC' },
        ];

        const links = [
            { source: 'UserA', target: 'UserB' },
            { source: 'UserB', target: 'UserC' },
        ];

        // Configuración del gráfico
        const width = 500;
        const height = 300;
        const simulation = d3
            .forceSimulation(nodes)
            .force('link', d3.forceLink(links).id((d) => d.id))
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Dibuja nodos y conexiones
        const link = svg
            .selectAll('.link')
            .data(links)
            .enter()
            .append('line')
            .attr('class', 'link');

        const node = svg
            .selectAll('.node')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('class', 'node')
            .attr('r', 10);

        simulation.nodes(nodes).on('tick', () => {
            link
                .attr('x1', (d) => d.source.x)
                .attr('y1', (d) => d.source.y)
                .attr('x2', (d) => d.target.x)
                .attr('y2', (d) => d.target.y);

            node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        });
    };

    return (
        <div className="channel-simulator">
            <h2>Simulador de Canal y Transacciones</h2>
            <div className="form-container">
                <label>Monto a invertir en el canal:</label>
                <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                />
                <label>Capacidad máxima del canal:</label>
                <input
                    type="number"
                    value={maxCapacity}
                    onChange={(e) => setMaxCapacity(e.target.value)}
                />
                <label>Tarifas para la transacción de apertura:</label>
                <input
                    type="number"
                    value={openingFees}
                    onChange={(e) => setOpeningFees(e.target.value)}
                />
                <button onClick={openChannel}>Abrir Canal</button>
            </div>
            {channelOpened && (
                <div className="channel-graph-container">
                    <h3>Representación gráfica del canal</h3>
                    <svg id="channel-graph" width={500} height={300}></svg>
                </div>
            )}
        </div>
    );
}

export default ChannelSimulator;
