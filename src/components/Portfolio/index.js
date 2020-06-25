import React from "react";
import Card from "../Card"
import images from "../images.json"
import Row from "../Row"


class Portfolio extends React.Component {
    state = {
        images,
      };
    
      render() {
        return (
          <div>
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
            <Row >
            {this.state.images.map(project => (
            
            <Card
                id={project.id}
                key={project.id}
                name={project.name}
                tools={project.tools}
                summary={project.summary}
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

  export default Portfolio;