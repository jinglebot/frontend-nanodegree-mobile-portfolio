module.exports = function(grunt) {

    // 1. All configuration goes here

    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat: {
        //     dist: {
        //         src: [
        //             'js/libs/*.js', // All JS in the libs folder
        //             'js/global.js'  // This specific file
        //         ],
        //         dest: 'js/build/production.js',
        //     }
        // },

        // uglify: {
        //     build: {
        //         src: 'js/build/production.js',
        //         dest: 'js/build/production.min.js'
        //     }
        // },

        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: {                         // Dictionary of files
                    // 'images/pizza.png': 'views/images/pizza.png' // 'destination': 'source'
                    'images/profilepic.jpg': 'img/profilepic.jpg'
                }
            }

            // dynamic: {
            //     files: [{
            //         expand: true,
            //         cwd: 'views/',
            //         src: ['images/pizzeria.jpg'],
            //         dest: 'images/',
            //         suffix: '_2'
            //     }]
            // }
        },

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                  sizes: [{
                    name: 'sm',
                    width: '640',
                    // suffix: '_sm',
                    quality: 20
                  },{
                    name: 'md',
                    width: '1024',
                    // suffix: '_md',
                    quality: 40
                  },{
                    name: 'lg',
                    width: '2048',
                    // suffix: '_lg',
                    quality: 60
                  }]
                },
                files: [{
                  expand: true,
                  // src: ['*.{gif,jpg,png}'],
                  src: ['pizzeria.jpg'],
                  cwd: 'views/images/',
                  dest: 'images/'
                }]
              }
            }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'responsive_images']);
    grunt.registerTask('default', ['imagemin']);

};