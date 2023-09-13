import React, { useState } from 'react';
import '../../styles/ChannelSimulator.css';

function ChannelSimulator() {
    const [nodes, setNodes] = useState([
        { id: 'Node1', name: 'Node 1', balance: 100 },
        { id: 'Node2', name: 'Node 2', balance: 100 },
        { id: 'Node3', name: 'Node 3', balance: 100 },
    ]);

    const [selectedNode, setSelectedNode] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState('');
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const selectNode = (node) => {
        setSelectedNode(node);
    };

    const makeTransaction = () => {
        if (selectedNode && transactionAmount) {
            const updatedNodes = [...nodes];
            const currentPlayer = updatedNodes[currentPlayerIndex];
            const targetNode = updatedNodes.find((node) => node.id !== currentPlayer.id);

            const amount = parseFloat(transactionAmount);
            
            if (currentPlayer.balance >= amount) {
                currentPlayer.balance -= amount;
                targetNode.balance += amount;
                setNodes(updatedNodes);
            } else {
                alert('Saldo insuficiente para realizar esta transacción.');
            }

            // Cambiar al siguiente jugador
            setCurrentPlayerIndex((currentPlayerIndex + 1) % nodes.length);
        }
    };

    return (
        <div className="channel-simulator">
            <h2>Lightning Network Simulator (Multiplayer)</h2>
            <div className="node-list">
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className={`node ${selectedNode === node ? 'selected' : ''}`}
                        onClick={() => selectNode(node)}
                    >
                        <p>Name: {node.name}</p>
                        <p>Balance: {node.balance}</p>
                    </div>
                ))}
            </div>
            <div className="transaction-form">
                <h3>Transaction</h3>
                <label>Select Node:</label>
                <p>{selectedNode ? selectedNode.name : 'None selected'}</p>
                <label>Transaction Amount:</label>
                <input
                    type="number"
                    placeholder="Amount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                />
                <button onClick={makeTransaction}>Make Transaction</button>
            </div>
        </div>
    );
}

export default ChannelSimulator;
