/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    connect: {
      server: {
        options: {
          port: 3001,
          livereload: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['loading-mask.js', 'example/src/**/*.js', 'test/**/*.js']
      }
    },
    browserify: {
      example1: {
        src: 'example/src/example1.js',
        dest: 'example/dist/example1.js',
        options: {
          transform: ['debowerify'],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'browserify:example1']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'browserify', 'connect', 'watch']);
};
