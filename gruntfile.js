module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON(`package.json`),
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"],
      },
    },

    less: {
      development: {
        options: {
          compress: true,
        },
        files: {
          "dev/styles/style.css": "src/styles/style.less",
        },
      },
    },

    uglify: {
      target: {
        files: {
          "dev/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less:development", "uglify"]);
};
