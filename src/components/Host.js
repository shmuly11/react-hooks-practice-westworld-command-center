import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selectedId, setSelectedId}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const [selected, setSelected] = useState(false)
  return (
    <Card
      className={selectedId === host.id ? "host selected" : "host"}
      onClick={()=> setSelectedId(host.id)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
