Linux Install
=============

Where possible, create a folder named `local` and install all apps to that folder. 

Applications
------------
* Nodejs,NPM/NVM
* Bower
* Ruby, Rubygems, RVM
* Postgresql Dev
* Python 2.7
* Redis
* Sublime Text 3
* Chrome
* Java 

Configuration
-------------

SSH Key Setup: `https://help.github.com/articles/generating-ssh-keys/`

The Sindeo Stack
================

Topics
------
* Django, Angular, etc
* Deployment
* Models

#### Vagrant
"Vagrant provides easy to configure, reproducible, and portable work environments..."

Machines are provisioned on virtualenv and then tools are used to install and configure the software.

Perks:
* Isolate dependencies and configurations into a single environment.
* Same configuration no matter the environment (Linux, OS X, Windows).
* Disposable environment

#### Fabric (python library)
http://www.fabfile.org/

Library and commandline tool. Streamlines the use of SSH for deployment or system administration. Provides a suite of operations for executing shell commands.

#### Pillow (python library)
https://en.wikipedia.org/wiki/Python_Imaging_Library

A fork of PIL, Python Imaging Library. Adds support for opening, manipulating, and saving many different image file formats.

#### Sentry

A modern error logging and aggregation platform.

#### PostgreSQL

Database. 

#### Django

Django is a web development framework. Works very similarly to Ruby on Rails. It uses ORM for database management and something similar to the MVC model, but not quite. Read the documentation on it and the following tools:

* djangorestframework
* djrill (mandrill)

#### Nginx

Nginx is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server. 

#### Redis

Redis is an open source, BSD licensed, advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.

It works like a No SQL database.

#### Salt
* http://docs.saltstack.com/en/latest/topics/tutorials/walkthrough.html

"The backbone of Salt is the remote execution engine, which creates a high-speed, secure and bi-directional communication net for groups of systems. On top of this communication system, Salt provides an extremely fast, flexible, and easy-to-use configuration management system called Salt States."

Masters and Minions = Server and Clients

"Salt states are YAML documents that describes the current state a machine should be in, e.g. what packages should be installed, which services are running, and the contents of arbitrary files." -- Vagrant Docs
https://docs.vagrantup.com/v2/provisioning/salt.html

#### Encompass

Integrated customer management solution that encompasses the entire loan process and creates one system for all the data.

#### Velocify

Accelerate sales performance. A tool for managing customer service and providing users with "actionable insights". 

#### Zinnia

An open-source weblog built on Django.

#### New Relic

Software analytics.

#### Running the Stack

There are a ton of different apps running fairly independently throughout the app. This means different commands for different things and knowing when to run them. Every app isn't needed every time, but be careful about pulling updates - you may need to update packages from these various applications. 

Redis and Postgres should be running in the background. Flush Redis if site features aren't working.

Loansifter is required for rate_quote form. Run the command if you're using it.
PYTHONPATH=../.. python loansifter_test.py


Deployment Process:

0. Fabfile: Command file for deployment.
1. jenkins.py: install pip and python
2. requirements/common.txt: Install requirements
2. requirements/jenkins.txt: 
3. static/: Clear Bower cache
4. static/: Install Bower components (git)
5. design/: Clear Bower cache
6. design/: Install bower components
7. sindeo_ci/design/dist/js: venv, collectstatic command (copy all static js/css/scss files)
7. sindeo_ci/design/dist/bower_components: copy all static bower files
7. python/zinnia: copy all image files
8. migrations
9. Run tests (including smoke tests)
10. Run Karma and Phantomjs
11. Fab beta deployment

AWS

1. Cloudfront CDN service. Move static files to CDN.
2. Update settings to include static file location.