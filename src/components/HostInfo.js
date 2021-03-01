import React, { useState, useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({host, onToggleActive}) {
  const {imageUrl, firstName, lastName, active, gender, area, id} = host
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.
   const areas = ["high_plains", "lowlands", "under_construction", "pariah", "python_pass", "badlands"]
  
  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const options = areas.map(a => {
    return { key: a, text: a, value: a }
  })
  // useState([
  //   { key: "some_area", text: "potato", value: "some_area" },
  //   { key: "another_area", text: "Another Area", value: "another_area" },
  // ]);

  // const [value, setValue] = useState(area);
  
  // useEffect(() => {
  //   setValue(area)
  // },[area])

  function handleOptionChange(e, { value }) {
    console.log(value)
    onToggleActive(id, {area: value})
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    console.log("The radio button fired");
    onToggleActive(id, {active: !active})
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
