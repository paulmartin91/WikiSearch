import React from 'react';
import FadeIn from 'react-fade-in';

const App = (props) => {

    return(
        <FadeIn delay={props.index*200}>
        <li key={props.key}
        className="listTab">
        <h1>
        {props.name}
        </h1>
        <p> 
        - {props.description}
        </p>
    </li>
    </FadeIn>
    )
}

export default App;