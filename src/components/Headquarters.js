import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

function Headquarters({hosts, selectedId, setSelectedId, onToggleActive}) {
  
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hosts={hosts.filter(host => host.active === false)} selectedId={selectedId} setSelectedId={setSelectedId}/>
        </Grid.Column>
      <Grid.Column width={5}>
        <Details host={hosts.find(host => host.id === selectedId)} onToggleActive={onToggleActive}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
