module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css':'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css':'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        },
        concurrent: {
            target: ['less','uglify']
        }
    })

    grunt.registerTask('olaGrunt', function(){
        const done = this.async();
        setTimeout(function(){
        console.log('Olá Grunt');
        done();
        }, 3000);
    })
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concurrent']);
    
}