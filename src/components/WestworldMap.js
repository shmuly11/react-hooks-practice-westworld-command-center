import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area'

function WestworldMap({hosts, selectedId, setSelectedId}) {
  const [areas, setAreas] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/areas")
    .then(res=>res.json())
    .then(setAreas)
  },[])


  const areasToDisplay = areas.map(area => {
    return <Area 
    area={area} 
    key ={area.id} 
    hosts={hosts.filter(host=> host.area === area.name)}
    selectedId={selectedId} setSelectedId={setSelectedId}/>
  })
  return <Segment id="map">{areasToDisplay}</Segment>;
}

export default WestworldMap;
