# Node-Server-Test 

* 2/22/23 : CDMX/México.
* @author  @AlexisTercero55
* @github  https://github.com/AlexisTercero55
* @mail    alexistercero55@gmail.com
* @license MIT


## Back-End App

This is a simple Node.js server app that serves a single PDF file when accessed.

## Installation

To install the app, follow these steps:

1. Clone the repository to your local machine.
  ```
  git clone https://github.com/AlexisTercero55/Node-Server-Test.git
  ```
2. Run ``npm install`` to install the dependencies.

## Usage

To start the server, run `node .\file-server.js`. This will start the server on port 3000 by default.

To access the PDF file, make a ``GET`` request to the ``/pdf`` endpoint:

* Test the server by runing ``request.js`` script as ``node .\request.js``
* Test the server on the browser by ``http://localhost:3000/pdf``

The PDF file will be sent as an octet stream.

## Dependencies
This app uses the following dependencies:

* ``express``: a Node.js web framework for handling HTTP requests and responses.
* ``path``: a Node.js module for handling file paths.

## Contributing
If you would like to contribute to the project, you can follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them to the new branch.
5. Push the new branch to your GitHub repository.
6. Open a pull request to the original repository.

## License

This app is released under the MIT License. See ``LICENSE`` file for details.

## Acknowledgments
This app was created for educational purposes and is based on various online tutorials and examples. Thanks to the developers who contributed to the open source libraries used in this project.
