import React from "react";

// reactstrap components
import { Label, Table, Row, Col } from "reactstrap";

class Colors extends React.Component {
  render() {
    return (
      <>
        <h1 className=" bd-title" id="content">
          Colors
        </h1>
        <p className=" bd-lead">
          Get started with Bootstrap, the world's most popular framework for
          building responsive, mobile-first sites, with BootstrapCDN and a
          template starter page.
        </p>
        <h2 id="primary-colors">Primary colors</h2>
        <p>
          Our primary palette is comprised of neutrals, white, and blue. These
          colors are present across most touch points from marketing to product.
        </p>
        <Row>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-primary">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Primary</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#007bff</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-info">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Info</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#17a2b8</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-success">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Success</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#28a745</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-danger">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Danger</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#dc3545</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-warning">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Warning</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#ffc107</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className=" color-swatch">
              <div className=" color-swatch-header bg-default">
                <div className=" pass-fail">
                  <div className=" pass-fail-item-wrap">
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item">
                        <div className=" example">A</div>
                        <div className=" lozenge">Fail</div>
                      </div>
                    </div>
                    <div className=" pass-fail-item-group">
                      <div className=" pass-fail-item white small">
                        <div className=" example">A</div>
                        <div className=" lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" color-swatch-body">
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Name</Label>
                    <div className=" value">Default</div>
                  </div>
                </div>
                <div className=" prop-item-wrap">
                  <div className=" prop-item">
                    <Label>Hex</Label>
                    <div className=" value">#ffc107</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h2 id="light-neutrals">Light neutrals</h2>
        <p>
          Light neutrals are helpful for offsetting content in a primarily white
          layout without losing warmth and cleanliness, and are therefore often
          used as a background color for web components.
        </p>
        <div className=" bd-example">
          <Table className=" table-colors">
            <tbody>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#f6f9fc" }}
                  />
                  Gray 100
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #f6f9fc
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#e9ecef" }}
                  />
                  Gray 200
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #e9ecef
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#e3e3e3" }}
                  />
                  Gray 300
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #e3e3e3
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#ced4da" }}
                  />
                  Gray 400
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #ced4da
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#adb5bd" }}
                  />
                  Gray 500
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #adb5bd
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#6c757d" }}
                  />
                  Gray 600
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #6c757d
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#525f7f" }}
                  />
                  Gray 700
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #525f7f
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#32325d" }}
                  />
                  Gray 800
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #32325d
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className=" swatch"
                    style={{ backgroundColor: "#212529" }}
                  />
                  Gray 900
                </td>
                <td>
                  <div className=" lozenge">Hex</div>
                  #212529
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Colors;
