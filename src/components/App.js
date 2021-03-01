import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap'
import HeadQuarters from './Headquarters'

function App() {
  const [hosts, setHosts] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3001/hosts")
    .then( res => res.json())
    .then(setHosts)
  },[])
 // ************ initially to toggle active but changed to also update area **************
  function handleToggleActive(id, obj){
    console.log(id)
    fetch(`http://localhost:3001/hosts/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(updatedHost => {
      const updated = hosts.map(host => {
        if(host.id === updatedHost.id){
          return {...host, active: updatedHost.active, area: updatedHost.area}
        } else {
          return host
        }
      })
      setHosts(updated)
    })
  }
  return (
    <Segment id="app">
      <WestworldMap hosts={hosts.filter(host => host.active === true)} selectedId={selectedId} setSelectedId={setSelectedId}/>
      <HeadQuarters hosts={hosts} selectedId={selectedId} setSelectedId={setSelectedId} onToggleActive={handleToggleActive}/>
    </Segment>
  );
}

export default App;
