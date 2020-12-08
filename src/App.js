import { useEffect, useState } from 'react';
import { Header } from './components/Header';

import { Options } from './components/Options';

function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const fecthApi = async() => {
        setLoading(true)
        const respuesta = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
        const  {events} = await respuesta.json();

        setEventData(events);
        setLoading(false)
    }
    
    fecthApi();
    console.log(eventData)

  },[])

  return (
    <div className="App">
      <Header />
      <Options 
        eventData = {eventData}
        loading = {loading}
      />
      
    </div>
  );
}

export default App;
