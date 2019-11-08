import React from 'react';

// this class is not used now but may be used as load spinner while data goes from backend
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            margin: '10% auto',
            borderBottom: '1px solid #8af',
            borderLeft: '1px solid #8af',
            borderRight: '5px solid #0af',
            borderTop: '5px solid #0af',
            borderRadius: '100%',
            background: 'linear-gradient(rgba(199, 216, 234, 0.6) 30%, rgba(166, 195, 224, 0.9) 90%)',
            height: '80px',
            width: '100px',
            animationName: 'spin',
            animationTimingFunction: 'linear',
            animationDuration: '2s',
            animationDelay: '0.0s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'forwards'
        };
        this.keyframes = '@keyframes spin {to {transform: rotate(360deg);}}';
    }

    render() {
        let styleSheet = document.styleSheets[0];
        styleSheet.insertRule(this.keyframes, styleSheet.cssRules.length);
        return <div style={this.style}/>
    }
}

export default Loading