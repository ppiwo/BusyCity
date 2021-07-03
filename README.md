
<h1 align="center">
  <br>
  <a href="https://patpiwo.dev/projects/busy-city/"><img src="https://i.imgur.com/yAH0d5X.png" alt="Markdownify" width="200"></a>
  <br>
  Busy City
  <br>
</h1>

<h4 align="center">Busy City is a modern CTA train tracker. <br> View what Chicago's train system is doing in real time, view estimated arrivals and more!</h4>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#local-env">Local Enviornment Config</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://patpiwo.dev/projects/busy-city/github/My-Movie.gif)

## Key Features

* Real time train tracking 
  - See the entirety of the Chicago train system in real time.
* Mobile Friendly UI
* Filter trains by line color  
* Live delay alerts
* Estimated arrival times
* Change marker size

## How To Use
A hosted version of this project can be found at <a href="patpiwo.dev/projects/busy-city" target="_blank">patpiwo.dev/projects/busy-city</a>

## Local Enviornment Configuration

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/ppiwo/BusyCity.git

# Navigate into the cloned repository
$ cd BusyCity

# Install dependencies
$ npm install

# Create a .env file in the root of the folder with the following line:
G_MAP_API_KEY=“[“YOUR GOOGLE MAPS API KEY”]

# Compile the source code using WebPack
$ npm run dev

```
### Start a webserver
I recommend using a plugin like <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">live-server for VSCode</a>

## Credits

This software uses the following open source packages:

- [Babel](https://babeljs.io)
- [CTA Train Tracker API](https://www.transitchicago.com/developers/traintracker/)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Handlebars](https://handlebarsjs.com)
- [Heroku](https://www.heroku.com)
- [Node.js](https://nodejs.org/)
- [SASS](https://sass-lang.com)
- [WebPack](https://webpack.js.org)

## Related

[CTA Transit Tracker](https://github.com/ppiwo/CTATransitTracker) - My original version of this train tracker.

## License

MIT

---

[patpiwo.dev](https://www.patpiwo.dev/) &nbsp;&middot;&nbsp;
GitHub [@ppiwo](https://github.com/ppiwo)

