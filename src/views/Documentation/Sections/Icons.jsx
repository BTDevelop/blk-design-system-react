/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const codeExample = `<Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
  <Card>
    <CardBody className="all-icons">
      <Row>
        <Col className="font-icon-list">
            <i className="tim-icons icon-single-02" />
        </Col>
      </Row>
    </CardBody>
  </Card>
</Col>`;

class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Icons
        </h1>
        <p className="bd-lead">
          For this dashboard we've used 100 awesome nucleo icons handcrafted by
          our friends from{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            NucleoApp
          </a>
          .
        </p>
        <p>
          You will find all these icons in{" "}
          <Link to="/admin/icons">the icons example page</Link>.
        </p>
        <h3>Examples</h3>
        <div className="bd-example">
          <Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
            <Card>
              <CardBody className="all-icons">
                <Row>
                  <Col className="font-icon-list">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Icons;
