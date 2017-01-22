module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "**/*.d.ts", "!emit/**", "!node_modules/**"],
        watch: ["."],
        out: "bin/js/game.js",
        //outDir: 'bin/js/',
        options: {
            allowJs: true
        }
      }
    },
    copy: {
  main: {
    files: [
      // includes files within path
     // {expand: false, src: ['nwjs/package.json'], dest: 'build/', filter: 'isFile'},

      // includes files within path and its sub-directories
      {expand: true, src: ['bin/**','index.html','assets/**','phaser.js'], dest: 'build/'},

      // makes all src relative to cwd
      {expand: true, cwd: 'nwjs/', src: ['**'], dest: 'build/'},

      // flattens results to a single level
     // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
    ],
  },
},
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask("default", ["ts"]);
  grunt.registerTask("build",["copy"])
};