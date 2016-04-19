module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        postcss: {
            options: {
              map: false,

              processors: [
                require('autoprefixer')({browsers: 'last 2 versions'})
              ]
            },
            dist: {
              src: 'css/*.css'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            livereload: {
                files: [
                    '**/*.{html}',
                    'sass/{,*/}*.scss',
                    ['js/*.js', '!js/*.min.js']
                ],
                tasks: [
                    'compass',
                    'postcss'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'compass',
        'postcss'
    ]);
};