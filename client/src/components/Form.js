import React, { useState } from "react";
import { CREATE_CREW_MUTATION } from "../graphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setname] = useState("");
  const [agency, setagency] = useState("");
  const [image, setimage] = useState("");
  const [wikipedia, setwikipedia] = useState("");
  const [status, setstatus] = useState("");

  const [createCrew, { error }] = useMutation(CREATE_Crew_MUTATION);

  const addCrew = () => {
    createCrew({
      variables: {
        name: name,
        agency: agency,
        image: image,
        wikipedia: wikipedia,
        status: status,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setagency(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => {
          setimage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="wikipedia"
        onChange={(e) => {
          setwikipedia(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="status"
        onChange={(e) => {
          setstatus(e.target.value);
        }}
      />
      <button onClick={addCrew}> Create Crew</button>
    </div>
  );
}

export default Form;
