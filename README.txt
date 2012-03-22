
/***************************************************************
* Install nodejs
***************************************************************/
== Linux
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

== Windows
# Install node.js and package manager
# http://nodejs.org/#download

/***************************************************************
* Install Dependencies
***************************************************************/
npm install

/***************************************************************
* Run Server
***************************************************************/
node src/server.js

