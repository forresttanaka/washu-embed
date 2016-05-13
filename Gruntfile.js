module.exports = function(grunt) {
'use strict';

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          outputStyle: 'compressed'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'jssrc/**/*.js'
          ]
        },
        options: {
          sourceMap: true
        }
      }
    },
    watch: {
      compass: {
        files: [
          'scss/**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'jssrc/**/*.js',
        ],
        tasks: ['uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'css/*.css',
          'js/scripts.min.js',
          'img/*.svg',
          '*.html'
        ]
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Register tasks
  grunt.registerTask('default', [
    'uglify', 'compass'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
