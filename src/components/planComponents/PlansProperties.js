import React from 'react';
import './PlansStyling.css'
import '../App.css';

function PlansProperties(props){

    return (
<React.Fragment>
    <div className ="container plan-property-city plan-property">
        {props.city}
    </div>
    <div className ="container plan-property-date plan-property">
         {props.date}
    </div>
</React.Fragment>

    );
}
export default PlansProperties;
