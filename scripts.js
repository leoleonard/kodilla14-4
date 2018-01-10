
var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o Horwardzie",
    poster: "https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/23/LionKingCharacters.jpg"
  },
  {
    id: 3,
    title: "Skazani na Shawshank",
    desc: "Opowieść wewnętrznej sile przetrwania",
    poster: "https://img1.cda.pl/vid/premium/1127811/299x446/8eda9798a97453d135cfd18e1e960141.jpg"
  },
    {
      id: 4,
      title: "Pinokio",
      desc: "Legalnda o drewnianym chłopcu",
      poster: "http://www.bickleyparkschool.co.uk/wp-content/uploads/2016/11/1a.png"
    }
];


var Movie = React.createClass({
  render: function() {
    var moviesElements = movies.map(function (movie) {
        return React.createElement(MovieList, {key: movie.id, movie: movie})
      });

      return (
          React.createElement("ul", {}, moviesElements
        )
      )
    }
  });

var MovieList = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
      return (
          React.createElement('li', {},
            React.createElement(MovieTitle, {movie: this.props.movie}),
            React.createElement(MovieDesc, {movie: this.props.movie}),
            React.createElement(MovieImage, {movie: this.props.movie})
          )
      )
    }
  });

var MovieTitle = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },


  render: function() {
      return (
          React.createElement("h1", {}, this.props.movie.title)
      )
    }
  });

  var MovieDesc = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
        React.createElement("p", {}, this.props.movie.desc)
      )
    }
  });

  var MovieImage = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },

  render: function() {
      return (
          React.createElement("img", {src: this.props.movie.poster})
      )
    }
  });


  var element = React.createElement(Movie, {movies:movies });
  ReactDOM.render(element, document.getElementById("app"));
