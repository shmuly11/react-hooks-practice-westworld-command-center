import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList'

function Area({area, hosts, selectedId, setSelectedId}) {
  const {id, name, limit, auth_req} = area
  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {name.split("_").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ")}
      </h3>
      <HostList hosts={hosts} selectedId={selectedId} setSelectedId={setSelectedId}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
