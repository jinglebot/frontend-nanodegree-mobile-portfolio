module.exports = function(grunt) {

    //  Configure

    // var mozjpeg = require('imagemin-mozjpeg');
    // require('load-grunt-tasks')(grunt);

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
        //         cwd: 'src/js/',
        //         src: ['*.js', '!*.min.js'],
        //         dest: 'dist/js/',
        //         ext: '.min.js'
        //     }
        // },

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'sm',
                        width: '100',
                        // suffix: '_sm',
                        quality: 20
                    },{
                        name: 'md',
                        width: '200',
                        // suffix: '_md',
                        quality: 40
                    },{
                        name: 'lg',
                        width: '300',
                        // suffix: '_lg',
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    // src: ['***/**/*.{gif,jpg,png}'],
                    src: ['views/images/pizzeria.jpg'],
                    dest: 'dist/'
                }]
            }
        },

        imagemin: {
        //     static: {
        //         options: {
        //             optimizationLevel: 3,
        //             svgoPlugins: [{ removeViewBox: false }],
        //             use: [mozjpeg()]
        //         },
        //         files: {                         // Dictionary of files
                    // 'images/pizza.png': 'views/images/pizza.png' // 'destination': 'source'
            //         'images/profilepic.jpg': 'img/profilepic.jpg'
            //     }
            // }

            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['***/**/*.{gif,jpg,png}'],
                    dest: 'dist/',
                    suffix: '_opt'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                        'dist/index.html': 'src/index.html'
        //         dest: 'dist/js/',
        //         ext: '.min.js'
                }
            }
        }

    });

    //  Load
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-minify-html');

    //  Register
    // grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'responsive_images', 'cssmin', 'minifyHtml']);
    grunt.registerTask('default', ['minifyHtml']);

};