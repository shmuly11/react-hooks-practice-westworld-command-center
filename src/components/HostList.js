import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({hosts, selectedId, setSelectedId}) {
  
  const hostsTodisplay = hosts.map(host => {
    return <Host host={host} key={host.id} selectedId={selectedId} setSelectedId={setSelectedId}/>
  })
  return (
    <Card.Group itemsPerRow={6}>{hostsTodisplay}</Card.Group>
  );
}

export default HostList;
