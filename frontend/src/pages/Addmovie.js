import React, { useState } from "react";
import axios from "axios";

const Addmovie = () => {
  const initialInputs = {
    Moviename: "",
    Platform: "",
    Genre: "",
    Link: "",
  };

  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Submitting:", inputs);
      await axios.post("http://localhost:5000/api/movie/create", inputs);

      setInputs(initialInputs);
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>Add Movies</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Movie Title:
          </label>
          <input
            type="text"
            name="Moviename"
            value={inputs.Moviename}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Platform:
          </label>
          <input
            type="text"
            name="Platform"
            value={inputs.Platform}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Genre:
          </label>
          <input
            type="text"
            name="Genre"
            value={inputs.Genre}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Link:</label>
          <input
            type="text"
            name="Link"
            value={inputs.Link}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addmovie;
