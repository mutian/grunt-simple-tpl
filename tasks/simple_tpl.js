/*
 * Simple template for HTML, JS and CSS
 * git://github.com/mutian/grunt-simple-tpl.git
 *
 * Copyright (c) 2016 Mutian Wang
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('simple_tpl', 'Simple Template', function() {
    var options = this.options();
    var data = options.data || {};

    this.files.forEach(function(file) {
      file.src.forEach(function(src) {
        if (!grunt.file.exists(src)) {
          grunt.log.error('Source file "' + src + '" not found.');
        }

        var dest = file.dest;
        dest = grunt.file.isDir(dest) ? dest + path.basename(src) : dest;

        var content = grunt.file.read(src);
        if (content) {
          content = content.replace(/\{\{\{([\w\.-]+?)\}\}\}/g, function(match, key) {
            var replace = data[key];
            return ('string' === typeof replace) ? replace : match;
          });
          grunt.file.write(dest, content);
        }
        
        grunt.log.ok('File "' + dest + '" created.');
      });
    });

    if (this.errorCount) { return false; }
  });
};
