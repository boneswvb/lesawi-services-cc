import React from 'react';

import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactFormCon from '../containers/ContactFormCon';
import TopOfPage from '../utils/TopOfPage';

import '../App.css';

function PricingComp() {
  return (
    <div className="tc container">
      <br />
      <br />
      <br />
      <Media>
        <Media.Body>
          <Container fluid="md">
            <h2 className="tc">Available Packages</h2>
            <br />
            <br />
            <Row>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    alt="Wim von Benecke"
                    src="https://res.cloudinary.com/wimvb/image/upload/v1611405338/internet1_idj2rg.png"
                    rounded
                  />
                  <Card.Body>
                    <h2 style={{ color: 'black' }}>
                      Starter
                      <br />
                      R 4 000.00
                      <br />
                      Once-off
                      <br />
                    </h2>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Custom Design</ListGroup.Item>
                    <ListGroup.Item>
                      One pager site
                      <br />
                      Long page with menu
                    </ListGroup.Item>
                    <ListGroup.Item>
                      No extra pages
                    </ListGroup.Item>
                    <ListGroup.Item>NON-React app Website</ListGroup.Item>
                    <ListGroup.Item>Responsive</ListGroup.Item>
                    <ListGroup.Item>
                      Add Image Gallery
                      <br />
                      R 600.00 for 30 photos
                    </ListGroup.Item>
                    <ListGroup.Item>Basic Contact form - no Google maps</ListGroup.Item>
                    <ListGroup.Item>No social buttons</ListGroup.Item>
                    <ListGroup.Item>Basic top navigation with dropdowns</ListGroup.Item>
                    <ListGroup.Item>No news components</ListGroup.Item>
                    <ListGroup.Item>No blog component</ListGroup.Item>
                    <ListGroup.Item>No data base</ListGroup.Item>
                    <ListGroup.Item>No extras</ListGroup.Item>
                  </ListGroup>
                  <Button variant="none">
                    <ContactFormCon />
                  </Button>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    alt="Wim von Benecke"
                    src="https://res.cloudinary.com/wimvb/image/upload/v1611405338/website1_z5ruwo.png"
                    rounded
                  />
                  <Card.Body>
                    <h2 style={{ color: 'black' }}>
                      Standard
                      <br />
                      R 7 500.00
                      <br />
                      Once-off
                    </h2>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Custom Design</ListGroup.Item>
                    <ListGroup.Item>Pages 7 – Add extra pages @ R 400.00 a page</ListGroup.Item>
                    <ListGroup.Item>Expand to as maximum 9 pages</ListGroup.Item>
                    <ListGroup.Item>React app Website</ListGroup.Item>
                    <ListGroup.Item>Responsive</ListGroup.Item>
                    <ListGroup.Item>
                      x1 Image Gallery
                      <br />
                      30 Photos
                    </ListGroup.Item>
                    <ListGroup.Item>Basic Contact forms & Google map</ListGroup.Item>
                    <ListGroup.Item>Social Buttons</ListGroup.Item>
                    <ListGroup.Item>Basic top navigation with dropdowns</ListGroup.Item>
                    <ListGroup.Item>No news component</ListGroup.Item>
                    <ListGroup.Item>No blog component</ListGroup.Item>
                    <ListGroup.Item>No data base</ListGroup.Item>
                    <ListGroup.Item>All extras to be quoted</ListGroup.Item>
                  </ListGroup>
                  <Button variant="none">
                    <ContactFormCon />
                  </Button>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    alt="Wim von Benecke"
                    src="https://res.cloudinary.com/wimvb/image/upload/v1611405337/www_cj92xt.png"
                    rounded
                  />
                  <Card.Body>
                    <h2 style={{ color: 'black' }}>
                      Business
                      <br />
                      R 10 500.00
                      <br />
                      Once-off
                    </h2>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Custom Design</ListGroup.Item>
                    <ListGroup.Item>Pages 10 – Add more for R400.00 a page</ListGroup.Item>
                    <ListGroup.Item>Unlimited pages allowed</ListGroup.Item>
                    <ListGroup.Item>React app Website</ListGroup.Item>
                    <ListGroup.Item>Responsive</ListGroup.Item>
                    <ListGroup.Item>
                      x1 Image Gallery
                      <br />
                      50 Photos
                    </ListGroup.Item>
                    <ListGroup.Item>Advanced Contact form & Google map</ListGroup.Item>
                    <ListGroup.Item>Social Buttons</ListGroup.Item>
                    <ListGroup.Item>Advanced top navigation with dropdowns</ListGroup.Item>
                    <ListGroup.Item>Blog Page</ListGroup.Item>
                    <ListGroup.Item>News page</ListGroup.Item>
                    <ListGroup.Item>Data base to be quoted</ListGroup.Item>
                    <ListGroup.Item>All extras to be quoted</ListGroup.Item>
                  </ListGroup>
                  <Button variant="none">
                    <ContactFormCon />
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Media>
              <Media.Body>
                <br />
                <h2>Other Services</h2>
                <Col>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="background">
                      Specialise or Large Web site not falling into the top packages will be
                      assessed and quoted.
                      <br />
                      A pre-agreed quote fee might be charged depending
                      on the size of the website.
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="background">Web site maintenance @ only R 250-00 per hour</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="background">Update static websites to be responsive</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="background">Converting web site to web app</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="background">
                      If you do not see what you need, let me know and I will let you know if I
                      can help you. &nbsp;
                      <a href="mailto: info@lesawi.co.za?subject=Pricing Query - Web-site">
                        Send Me An Email
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Media.Body>
            </Media>
          </Container>
          <br />
          <h1>Web site pricing</h1>
          <p>
            Website design prices in South Africa varies from R1,000 – R30,000+ for the exact same
            website depending on the skill and experience a designer has, and programming
            language/s or content management systems that is use.
            <br />
            <strong>What you need to know before calling a web designer/Developer</strong>
            <br />
            Have an idea of what you want and giving an example of it like a website on the internet
            will help.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h1>Things to consider</h1>
          <p>What’s the Basic Purpose of Your Website?</p>
          <br />
          <h3>What Type of Functionality Do You Need Out of the Website?</h3>
          <p>
            You’ll need to figure out if you would like to have a responsive or static website
            design and what you want your visitors to do on your website in order to know the
            functionality.
          </p>
          <p>Will you need any of these?</p>
          <p>Service pages</p>
          <p>Product pages</p>
          <p>Online payments</p>
          <p>A Registration and login page</p>
          <p>A Blog on your website</p>
          <p>Newsletter signup</p>
          <p>Social media integration</p>
          <p>Search engine optimization services</p>
          <p>Online marketing services</p>
          <p>Responsive/Static web design, etc.</p>
          <h3>How many pages do you need to be Designed?</h3>
          <p>home</p>
          <p>about us</p>
          <p>products</p>
          <p>contact us</p>
          <p>privacy policy</p>
          <p>terms of service, and anything else you might need</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <br />
          <h2>Know Your Design and Programming Budget</h2>
          <p>
            If you know how much you can spend, tell a designer when they ask what your budget is.
            This will help to figure out a plan that will work best within your budget.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2> Some Extras Cost To Take Note Of</h2>
          <h4>This are usually required if you want to start running a website.</h4>
          <p>1. Domains and Hosting</p>
          <p>2. Online Marketing</p>
          <p>3. Website Content</p>
          <p>4. Website Maintenance</p>
          <p>
            Not every website will need us to go in and maintain it since a lot of clients don’t
            update much after they go live.
            <br />
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h1>Summary</h1>
          <p>What is your reasonable deadline?</p>
          <p>Is your deadline a hard stop or can it be extended if needed?</p>
          <p>What is your budget for the website to be designed?</p>
          <p>
            How many pages will you need to be designed and what functions do they need to have
            within them?
          </p>
          <p>Do you need any animation done? If so, what exactly is needed?</p>
          <p>Do you have your own domain and hosting set up already?</p>
          <p>Do you need online marketing for your website?</p>
          <p>Do you need content generation for your website?</p>
        </Media.Body>
      </Media>
      <TopOfPage />
    </div>
  );
}

export default PricingComp;
