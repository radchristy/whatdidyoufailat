import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addFailure, removeFailure } from "./actions/actions";

const useGif = () => {
  const [gifLink, setGifLink] = useState();

  const getUrl = () => {
    const endpoint = "https://g.tenor.com/v1/random?key=IMUMFWNUN618&q=proud";
    fetch(endpoint)
      .then((data) => data.json())
      .then((data) => {
        const url = data["results"][0]["media"][0]["tinygif"]["url"];
        setGifLink(url);
      });
  };

  useEffect(() => {
    getUrl();
  }, []);

  return {
    gifLink,
    refresh: getUrl,
  };
};

const App = () => {
  const dispatch = useDispatch();
  const [userText, setUserText] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { gifLink, refresh } = useGif();

  const onTextChange = (e) => {
    setUserText(e.target.value);
  };

  const onDropdownChange = (e) => {
    setCategoryValue(e.target.value);
  };

  const onSubmit = (e) => {
    setIsModalVisible(true);
    dispatch(addFailure(uuidv4(), userText, categoryValue));
    refresh();
  };

  const handleClose = (e) => {
    setIsModalVisible(false);
  };

  return (
    <>
      <h1>What did you fail at today?</h1>
      <InputGroup className="mb-3">
        <Form.Select
          onChange={onDropdownChange}
          aria-label="Default select example"
        >
          <option>Enter a Category</option>
          <option value="Career">Career</option>
          <option value="Social">Social</option>
          <option value="Personal">Personal</option>
        </Form.Select>
        <FormControl
          onChange={onTextChange}
          aria-label="Text input with dropdown button"
        />
        <Button onClick={onSubmit} variant="primary">
          Enter
        </Button>{" "}
      </InputGroup>

      <Modal show={isModalVisible} onHide={handleClose}>
        <h2>Congratulations! I'm proud of you!</h2>

        <img id="share_gif" src={gifLink} alt="" />
      </Modal>
    </>
  );
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Career">Grapefruit</option>
            <option value="School">Lime</option>
            <option value="Personal">Coconut</option>
            <option value="Social">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
