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
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};