module.exports = function (grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				config: "eslint.json",
				reset: true,
			},
			target: ["./js/scripts.js"],
		},
		uglify: {
			dev: {
				options: {
					mangle: true,
				},
				files: {
					"./build/main.min.js": "./js/main.js",
					"./build/carousal.min.js": "./js/carousal.js",
					"./build/navigation.min.js": "./js/navigation.js",
				},
			},
		},
	});

	grunt.registerTask("default", ["eslint"]);

	//load uglify plugin
	grunt.loadNpmTasks("grunt-contrib-uglify");
	//create default task
	grunt.registerTask("default", ["uglify"]);
};
