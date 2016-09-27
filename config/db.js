'use strict';

var crypto = require('crypto');

module.exports = function() {
  return {
    movieList: [],

    save(movie) {
      movie.id = crypto.randomBytes(20).toString('hex');
      this.movieList.push(movie);
      return 1;
    },

    find(id) {
      if(id) {
        return this.movieList.find(element => {
          return element.id === id;
        })
      } else {
        return this.movieList;
      }
    },

    remove(id) {
      var found = 0;
      this.movieList = this.movieList.filter(element => {
        if(element.id === id) {
          found = 1;
        } else {
          return element.id !== id;
        }
      });
      return found;
    },

    update(id, movie) {
      var movieIndex = this.movieList.findIndex(element => {
        return element.id === id;
      });
      if(movieIndex !== -1) {
        this.movieList[movieIndex].title = movie.title;
        this.movieList[movieIndex].year = movie.year;
        return 1;
      } else {
        return 0;
      }
    }
  }
};
