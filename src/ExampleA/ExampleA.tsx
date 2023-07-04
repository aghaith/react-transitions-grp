import { useState, useRef  } from 'react';
import { CSSTransition } from 'react-transition-group';
import './example-a.css';
const ExampleA = () => {
    const [isEnter, setIsEnter] = useState<boolean>(false);
    const transitionRef = useRef(null);
    const onTransitionBtnClick = () => {
        setIsEnter((v) => !v)
    }
    return (
        <>
            <div className='container'>
                <button onClick={onTransitionBtnClick}>Transition</button>
                <CSSTransition
                    //1. state(enter/exit)
                    in={isEnter}
                    //2. duration
                    timeout={5000}
                    // use appear to animate appearance
                    appear={true}
                    //3. class name prefix
                    classNames="my-class"
                    nodeRef={transitionRef}
                >
                    {/** Child */}
                    <p 
                        className='my-paragraph' 
                        ref={transitionRef}
                    >
                        {isEnter ? 'Enter' : 'Exit'}
                    </p>
                </CSSTransition>
            </div>
        </>
    );
}
export default ExampleA;