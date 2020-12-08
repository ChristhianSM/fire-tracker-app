import React, { useState } from 'react';
import { Loader } from './Loader';
import {Map} from './Map';

export const Options = ({eventData,loading}) => {

    const [selected, setSelected] = useState(null);
    let selectedEvents;
    
    const handleSelect = (e) =>{
        const id = e.target.value;
        setSelected(id);
        selectedEvents = eventData.filter( ev => ev.categories[0].id === id);
        console.log(selectedEvents)
    }

    return (
        <div className = 'eventos'>
            {/* <select name="desastres" id="select-eventos" onChange = {handleSelect}>
                <option value="">--Please choose an option--</option>
                <option value="8">Wildfire</option>
                <option value="15">Volcanes</option>
            </select> */}
            {!loading ? <Map eventData = {eventData}/> : <Loader />}
        </div>
    )
}
