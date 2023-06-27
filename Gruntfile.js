module .exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent: {
            target: ['HelloWord', 'less', 'sass', 'TarefaDemorada']
        }
    })


// atrado na execução da tarefa em 8seg
    grunt.registerTask('HelloWord', function() {
       const done = this.async();
        setTimeout(function() {
           console.log('Hello Word');
           done();
        }, 2000);
    })

    grunt.registerTask('TarefaDemorada', function() {
        const done = this.async();
         setTimeout(function() {
            console.log('Hello Word');
            done();
         }, 20000);
     })
 



    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');


    // [] = Array...pode conter várias tarefas
    grunt.registerTask('default', ['concurrent']);
}