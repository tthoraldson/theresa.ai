var fs = require('fs');

module.exports = function(grunt){
  'use strict';

  // REQUIRE GRUNT NPM DEV DEPENDICIES
  require('load-grunt-tasks')(grunt);

  // CONFIGURE TASKS
  grunt.initConfig({
    prop: 'some property',
    pkg: grunt.file.readJSON('package.json'),
    test: {
      taskOwner: 'Theresa',
      src: 'grunt/js/test.js',
      dest: 'somefile.js',
      options: {
        comment: '/* <%= pkg.author %> */'
      }
    },
    jshint: {
      src: ['server/public/scripts/*.js']
    },
    clean: ['grunt/**/*'],
    uglify: {
      dist: {
        files: {
          'grunt/scripts/graphics.min.js' : 'server/public/scripts/graphics.js'
        }
      },
      options: {
        sourceMap: true
      }
    },
    cssmin: {
      dist: {
        files: {
          'grunt/styles/main.min.js' : 'server/public/styles/main.css'
        }
      },
      options: {
        sourceMap: true
      }
    },
    htmlbuild: {
      dist: {
        src: 'server/public/views/test.html',
        dest: 'grunt/index.html',
        options: {
          prefix: 'grunt/',
          relative: true,
          scripts: {
            'package': 'scripts/graphics.min.js'
          },
          styles: {
            css: 'styles/main.min.css'
          }
        }
      }
      // ADD DEV FOR UNCOMPRESSED VERSION IF YOU SO FEEL LIKE IT
    }
  });

  // DEFAULT
  grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'cssmin', 'htmlbuild']);

}