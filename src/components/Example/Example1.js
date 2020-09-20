import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import ReactiveButton from 'reactive-button';

const Example1 = (props) => {
    const [button1, setButton1] = useState({
        ref: useRef(),
        color: 'primary',
        idleText: 'Primary',
        loadingText: <span> <span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>,
        successText: <span> <span><FontAwesomeIcon icon={faCheck}/></span> Success</span>,
        errorText: <span> <span><FontAwesomeIcon icon={faTimes}/></span> Error</span>,
        buttonState: 'idle',
        endState: 'success',
    });

    const [button2, setButton2] = useState({
        ref: useRef(),
        color: 'dark',
        idleText: 'Dark',
        loadingText: <span><span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>,
        successText: <span><span><FontAwesomeIcon icon={faCheck}/></span> Success</span>,
        errorText: <span><span><FontAwesomeIcon icon={faTimes}/></span> Error</span>,
        buttonState: 'idle',
        endState: 'success',
    });

    const [button3, setButton3] = useState({
        ref: useRef(),
        color: 'light',
        idleText: 'Light',
        loadingText: <span> <span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>,
        successText: <span> <span><FontAwesomeIcon icon={faCheck}/></span> Success</span>,
        errorText: <span> <span><FontAwesomeIcon icon={faTimes}/></span> Error</span>,
        buttonState: 'idle',
        endState: 'success',
    });

    const [button4, setButton4] = useState({
        ref: useRef(),
        color: 'green',
        idleText: 'Green',
        loadingText: <span> <span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>,
        successText: <span> <span><FontAwesomeIcon icon={faCheck}/></span> Success</span>,
        errorText: <span> <span><FontAwesomeIcon icon={faTimes}/></span> Error</span>,
        buttonState: 'idle',
        endState: 'success',
    });

    const [button5, setButton5] = useState({
        ref: useRef(),
        color: 'red',
        idleText: 'Red',
        loadingText: <span> <span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>,
        successText: <span> <span><FontAwesomeIcon icon={faCheck}/></span> Success</span>,
        errorText: <span> <span><FontAwesomeIcon icon={faTimes}/></span> Error</span>,
        buttonState: 'idle',
        endState: 'success',
    });

    const buttons = [
        [button1, setButton1],
        [button2, setButton2],
        [button3, setButton3],
        [button4, setButton4],
        [button5, setButton5],
    ];

    const onClickHandler = (index) => {
        buttons[index][1]({
            ...buttons[index][0],
            buttonState: 'loading'
        });
        setTimeout(() => {
            buttons[index][1]({
            ...buttons[index][0],
            buttonState: buttons[index][0].endState
        });
        }, 2000);
    }

    return (
        <React.Fragment>
            <section className="flex-section" >
                {buttons.map((button, index) => (
                    <div className="item" key={index}>
                        <ReactiveButton
                            buttonRef={button[0].ref}
                            color={button[0].color}
                            idleText={button[0].idleText}
                            loadingText={button[0].loadingText}
                            successText={button[0].successText}
                            errorText={button[0].errorText}
                            buttonState={button[0].buttonState}
                            onClick={() => {onClickHandler(index)}}
                        />
                    </div>
                ))}
                
            </section>
        </React.Fragment>
    );
};

export default Example1;