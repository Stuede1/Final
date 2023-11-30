import React, { useState, useEffect } from 'react';

const RobotList = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getMethod();
  }, []);

  const getMethod = () => {
    fetch('http://localhost:8081/listRobots')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRobots(data);
        
      });
  };

  const loadRobots = () => {
    return robots.map((robot, index) => (
        <div key={index} className="col">
          <div className="card shadow-sm">
            <img
              src={robot.imageUrl}
              className="bd-placeholder-img card-img-top"
              width="100%"
              height={225}
              alt={robot.name}
            />
            <div className="card-body">
              <h5 className="card-title">{robot.name}</h5>
              <p className="card-text">{robot.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-body-secondary">{robot.price} mins</small>
              </div>
            </div>
          </div>
        </div>
      ));
    };

  const getMethodById = id => {
    fetch(`http://localhost:8081/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
      });
  };

  const postMethod = () => {
    fetch('http://localhost:8081/addRobot', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: 4,
        name: 'Cole',
        price: 225.00,
        description: 'This is the robot to test POST',
        imageUrl: 'https://robohash.org/coles',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  const handleButtonClick = () => {
    const inputElement = document.getElementById('integerInput');
    const inputValue = inputElement.value;
    const integerInput = parseInt(inputValue);
    deleteMethod(integerInput);
  };

  const deleteMethod = id => {
    console.log('Let\'s do Delete ....', id);
    fetch('http://localhost:8081/deleteRobot', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log('Error:' + err));
  };

  return (
    
<body>
    
       
    
 
  
  
  <header data-bs-theme="dark">
    <div className="collapse text-bg-dark" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4>About</h4>
            <p className="text-body-secondary">
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Follow on Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Like on Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Email me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <svg 
            width={30}
            height={30}
          >
          </svg>
          <strong>Cy-Cards</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  </header>
  <main>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Cy-Cards</h1>
          <p className="lead text-body-secondary">
            Welcome to Cy-Cards! Make your own set or take a look at our demo sets to strengthen your knowledge or entertain yourself.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Create a set
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Play a set
            </a>
          </p>
        </div>
      </div>
    </section>
    <script>
        
    </script>
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
      
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {loadRobots()}
          
        </div>
      </div>
    </div>
  </main>
  <footer className="text-body-secondary py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
      <p className="mb-1">
        Album example is © Bootstrap, but please download and customize it for
        yourself!
      </p>
      <p className="mb-0">
        New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
        <a href="../getting-started/introduction/">getting started guide</a>.
      </p>
    </div>
  </footer>



    
    <div>
      <button onClick={getMethod}>Show All Robots</button>



      
     
      <button onClick={() => getMethodById(1)}>Show Robot 1</button>
      <button onClick={() => getMethodById(2)}>Show Robot 2</button>
      <button onClick={() => getMethodById(3)}>Show Robot 3</button>
      <button onClick={postMethod}>Post New Robot</button>
      <div>
        <label htmlFor="integerInput">Robot to delete:</label>
        <input type="number" id="integerInput" />
        <button onClick={handleButtonClick}>Delete</button>
      </div>
    </div>
    </body>
  );
};

export default RobotList;