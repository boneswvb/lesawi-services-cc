import React from 'react';

import Media from 'react-bootstrap/Media';

function HomeComp() {
  return (
    <div className="container">
      <Media>
        <Media.Body className="tc">
          <h1>Welcome to LeSaWi Services CC</h1>
          <h5>Web App Development - A new start for your business</h5>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <Media.Body className="tc">
          <p>
            All modern businesses require a good website. Most consumers will research a product
            or brand online before they make a commitment to purchase anything. However, you can’t
            just make do with any odd website. You need a reliable, well-designed platform that
            will appeal to your target audience. That is just what we provide at LeSaWi.
            We are website Development Company based in White River. Our straightforward and
            flexible approach to web development ensures your brand has the best platform.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body className="tc">
          <h2>Custom Web Development Company</h2>
          <p>
            In this highly competitive market, it is important for businesses to establish a unique
            and appealing website. A badly designed web site compromise your company’s reputation.
            You need something that represents your brand accurately. LeSaWi take time to understand
            your brand and develop a site that does justice to it.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body className="tc">
          <h2>Responsive Designs</h2>
          <p>
            Most modern consumers visit your websites from their mobile devices. If your website
            doesn’t perform well on this platform, your prospective customers will leave and
            visit your competitors. There are two alternatives available to improve the mobile
            experience; a separate mobile website or a responsive design. The responsive design
            is more popular because it is easier to maintain. A responsive website adjusts
            seamlessly to the screen size and browser, delivering the best possible experience.
            As an expert web development company, we understand the importance of creating
            a mobile-friendly platform.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body className="tc">
          <h2>Different Types of Websites</h2>
          <p>
            Different kinds of websites require different approaches. An expansive e-commerce
            platform requires shopping carts and is built on e-commerce friendly platforms.
            Single-page business websites need to be impactful because they can’t rely on long
            pages of content to impress their customers. At LeSaWi we are familiar with the
            different types of websites and can create an optimized platform for you using
            technologies like:
          </p>
          <h4>Open Source Development</h4>
          <p>
            This is a cost-effective and efficient way to create a website. We Have access to
            a wide range of software programs, platforms, plug-ins, etc, to create a highly
            customized and flexible web application for your need.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body className="tc">
          <h4>React</h4>
          <h5>
            What is React and how will it benefit your business?
          </h5>
          <p>
            ReactJS is a JavaScript library that combines the speed of JavaScript and uses a new
            way of rendering webpages, making them highly dynamic and responsive to user input.
          </p>
          <p>
            <strong>Sites using React:</strong>
            BBC, Netflix, Dropbox, Coursera, IMDb, PayPal, Dailymotion, Chrysler, American Express,
            Intuit, Khan Academy, Lyft, Atlassian, New York Times, Reddit and dozens of others.
            One of our recent projects, Mochi – Pet Supplies & Food, is also built using React
            Native, and currently, it gains traction.
            <p>
              Using ReactJS to develop an app requires you hire the Best Reactjs Development Company
              around you. Getting a ReactJS developer team to run your project saves you more time
              and averts unnecessary back and forth.
            </p>
            <h5>
              <strong>An open-source Facebook library:</strong>
              constantly developing and open to the community
            </h5>
            <p>
              React was one of the first JavaScript-connected projects released as open-source by
              Facebook. That means that ReactJS uses all advantages of free access – a lot of
              useful applications and additional tools from off-company developers. Facebook’s
              Pete Hunt says that at least two main features – batching and pruning – were created
              by developers that noticed the project on GitHub. Now ReactJS is 5th in Trending on
              GitHub with over 152,000 stars. And, there are more than 1400 open-source
              contributors working with the library.
            </p>
            <h5>
              Virtual DOM
            </h5>

            <p>
              In many front-end frameworks, DOM (Document Object Model) is a tree-shaped HTML
              representation of all elements of a web application, built into a parent-child
              structure. Whenever there is a change in the state of any element (for example,
              a button is clicked or a form submitted), DOM gets immediately updated.
              This way, it always represents the current UI of a website. A single manipulation
              of a DOM is fast. But with every change, both a parent and its children get updated.
              It’s fine on simple websites but once a project gets complex, it causes very
              frequent updates to multiple elements, effectively slowing down the website. This,
              as a result, makes for a rather poor user experience.
            </p>
            <p>
              ReactJS optimises this by leveraging its Virtual DOM to speed up the websites.
              Virtual DOM (vDOM), as the name suggests, is not a real DOM but its virtual
              representation. Whenever any element of a website is modified, a vDOM is updated.
              The updated VDOM is then compared against a real DOM using a reconciliation
              algorithm from React. This process is used to calculate the minimal set of changes
              to be applied to the actual DOM. Rather than update dozens of elements whenever a
              change is made, ReactJS updates only a single element that was just modified,
              significantly cutting the time of the operation.
            </p>
            <p>
              As a result, it speeds up the page significantly. It’s hardly a secret that faster
              pages tend to result in higher conversion rates and better user experience. This,
              consequently, tends to bring higher sales, more signups and lower drop off rates.
            </p>
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body className="tc">
          <h4>Just for Geeks</h4>
          <h6>What is under the hood of my products</h6>
          <p>
            <strong>dependencies:</strong>
            &nbsp;
            @testing-library/jest-dom,
            @testing-library/react,
            @testing-library/user-event,
            bootstrap,
            prop-types,
            react,
            react-bootstrap,
            react-dom,
            react-helmet,
            react-router,
            react-router-dom,
            react-scripts,
            tachyons.
            <br />
            <strong>devDependencies:</strong>
            &nbsp;
            eslint,
            eslint-config-airbnb,
            eslint-config-prettier,
            eslint-plugin-import,
            eslint-plugin-jsx-a11y,
            eslint-plugin-prettier,
            eslint-plugin-react,
            eslint-plugin-react-hooks,
            prettier,
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default HomeComp;
