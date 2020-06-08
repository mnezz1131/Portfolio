import React, { Component } from "react";
import Card from "../components/Card"
import images from "../components/images.json"
import Row from "../components/Row"
class Discover extends Component {
  state = {
    images,
 
  };

  // When the component mounts, load the next dog to be displayed


  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to my Portfolio</h1>
        <div className="row">
        <Row >
        {this.state.images.map(project => (
        
        <Card
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            gitHub={project.gitHub}
            deploy={project.deploy}
        
          />
        ))}
        </Row>
        </div>
      </div>
    );
  }
}

export default Discover;
