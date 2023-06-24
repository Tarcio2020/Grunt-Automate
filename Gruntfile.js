module .exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })


// atrado na execução da tarefa em 8seg
    grunt.registerTask('HelloWord', function() {
       const done = this.async();
        setTimeout(function() {
           console.log('Hello Word');
           done();
        }, 8000);
    })
    // [] = Array...pode conter várias tarefas
    grunt.registerTask('default', ['HelloWord'])
}