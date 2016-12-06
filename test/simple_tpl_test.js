'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.simple_tpl = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  index: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/views/index.html');
    var expected = grunt.file.read('test/expected/index.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  foo: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/views/detail/foo.html');
    var expected = grunt.file.read('test/expected/detail/foo.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  bar: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/views/detail/bar.html');
    var expected = grunt.file.read('test/expected/detail/bar.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  notpl: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/views/no-tpl.html');
    var expected = grunt.file.read('test/expected/no-tpl.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
