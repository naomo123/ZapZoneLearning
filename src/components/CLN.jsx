import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CLN.css';
import presponses from '../assets/predefinedResponses.json';
import stepsjson from '../assets/content.json';
import WeareWorking from './WeareWorking';

const CLN = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const terminalRef = useRef(null);
    const [commandHistory, setCommandHistory] = useState([]);
    const [isTypingResponse, setIsTypingResponse] = useState(false);
    const predefinedResponses = presponses;
    const steps = Object.values(stepsjson.steps);
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        { console.log(isChecked) }
    };

    const navigate = useNavigate();

    const handleInput = () => {
        if (isTypingResponse) {
            return;
        }

        const trimmedInput = input.trim();
        console.log(trimmedInput)
        if (trimmedInput === 'clear') {
            setOutput([]);
            setInput('');
            setCommandHistory([]);

        } else if (trimmedInput) {
            const newCommandHistory = [...commandHistory, trimmedInput];

            if (predefinedResponses.hasOwnProperty(trimmedInput)) {
                const response = predefinedResponses[trimmedInput];
                console.log(response);
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                const responseOutput = `root@linux:/ ${response}`;
                newOutput.push(responseOutput);
                setOutput([...newOutput]);

                setIsTypingResponse(true);

                let typingIndex = 0;
                const typingInterval = setInterval(() => {
                    if (typingIndex < response.length) {
                        newOutput[newOutput.length - 1] = `${response.substring(0, typingIndex + 1)}`;
                        setOutput([...newOutput]);
                        typingIndex++;
                    } else {
                        clearInterval(typingInterval);
                        setIsTypingResponse(false);
                    }
                },10);
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error"> Comando no reconocido: ${trimmedInput} </span>];
                setOutput(newOutput);
            }

            setCommandHistory(newCommandHistory);
            setInput('');
        }
    };

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/achievementbox');
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <div className="container">

            <div class="tabs">
                <input type="radio" id="tab1" name="tab-control" checked={isChecked} onChange={handleCheckboxChange} />
                <input type="radio" id="tab2" name="tab-control" />
                <input type="radio" id="tab3" name="tab-control" />
                <input type="radio" id="tab4" name="tab-control" />

                <ul>
                    <li title="Regtest"><label htmlFor="tab1" role="button"><span>Regtest</span></label></li>
                    <li title="Tesnet"><label htmlFor="tab2" role="button"><span>Testnet</span></label></li>
                    <li title="Signet"><label htmlFor="tab3" role="button"><span>Signet</span></label></li>
                    <li title="Mainnet"><label htmlFor="tab4" role="button"><span>Mainnet</span></label></li>
                </ul>
                <div className="slider"><div className="indicator"></div></div>
                <div className="content">
                    <section className='sectionReg'>

                        <div className="steps">
                            <div className="step">{steps[currentStep]}</div>

                            <button onClick={handleNextStep} className="next-button">
                                {currentStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                            </button>
                        </div>

                        <div className="terminal" ref={terminalRef}>
                            {output.map((line, index) => {
                                const promptLength = 'root@linux:/'.length;
                                const isResponse = index % 2 === 1;
                                const lines = typeof line === 'string' ? line.split('\n') : [line];


                                return (
                                    <div key={index}>
                                        {lines.map((text, lineIndex) => (
                                            <div key={lineIndex} className={`output-line ${isResponse ? 'response-line' : ''}`}>
                                                {typeof text === 'string' && text.startsWith('root@linux:/') ? (
                                                    <>
                                                        <span className="prompt">
                                                            {text.substring(0, promptLength)}
                                                        </span>
                                                        {text.substring(promptLength)}
                                                    </>
                                                ) : (
                                                    text
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}

                            <div className="input-line-container">
                                <span className="prompt">root@linux:/</span>
                                <input
                                    className="input-line"
                                    type="text"
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleInput();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                    <section className='sectionTest'>
                    <WeareWorking/>
                        </section>
                    <section className='sectionSig'>
                    <WeareWorking/>
                        </section>
                    <section className='sectionMain'>
                           <WeareWorking/>
                        </section>
                </div>
            </div>




        </div>
    );
};

export default CLN;
