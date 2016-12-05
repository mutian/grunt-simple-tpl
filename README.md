# grunt-simple-tpl v0.1.8

[![Build Status: Linux](https://travis-ci.org/mutian/grunt-simple-tpl.svg?branch=master)](https://travis-ci.org/mutian/grunt-simple-tpl)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/61h2has50qi0o6pi/branch/master?svg=true)](https://ci.appveyor.com/project/mutian/grunt-simple-tpl/branch/master)

> Simple template for HTML, JS and CSS


## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-simple-tpl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-simple-tpl');
```


## The "simple_tpl" task

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Options

#### data
Type: `Object`  
Default: `{}`


### Usage Examples

#### Grunt config
```js
grunt.initConfig({
	simple_tpl: {
	    dev: {
	        options: {
	            data: {
	                web_root: 'http://dev.domain.com',
	                css_path: '//dev.cdn.com/w/1604/c',
	                img_path: '//dev.cdn.com/w/1604/i',
	                js_path: '//dev.cdn.com/w/1604/j',
	                version: grunt.template.today("yymmddHHMM")
	            }
	        },
	        files: [
	            {
	                expand: true,
	                cwd: 'html',
	                src: ['**/*.html'],
	                dest: '../views'
	            },
	            {
	                expand: true,
	                cwd: 'css',
	                src: ['**/*.css'],
	                dest: '../static/css'
	            }
	        ]
	    },
	    test: {
	        options: {
	            data: {
	                web_root: 'http://test.domain.com',
	                css_path: '//test.cdn.com/w/1604/c',
	                img_path: '//test.cdn.com/w/1604/i',
	                js_path: '//test.cdn.com/w/1604/j',
	                version: grunt.template.today("yymmddHHMM")
	            }
	        },
	        files: [
	            {
	                expand: true,
	                cwd: 'html',
	                src: ['**/*.html'],
	                dest: '../views'
	            },
	            {
	                expand: true,
	                cwd: 'css',
	                src: ['**/*.css'],
	                dest: '../static/css'
	            }
	        ]
	    },
	    prod: {
	        options: {
	            data: {
	                web_root: 'http://www.domain.com',
	                css_path: '//cdn.com/w/1604/c',
	                img_path: '//cdn.com/w/1604/i',
	                js_path: '//cdn.com/w/1604/j',
	                version: grunt.template.today("yymmddHHMM")
	            }
	        },
	        files: [
	            {
	                expand: true,
	                cwd: 'html',
	                src: ['**/*.html'],
	                dest: '../views'
	            },
	            {
	                expand: true,
	                cwd: 'css',
	                src: ['**/*.css'],
	                dest: '../static/css'
	            }
	        ]
	    }
	}
});
```

#### Templates

HTML template:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CCT</title>
	<link rel="stylesheet" href="{{{css_path}}}/global.css?v={{{version}}}">
</head>
<body>
	<a href="{{{web_root}}}/home.html"><img src="{{{img_path}}}/logo.png?v={{{version}}}"></a>
	<script src="{{{js_path}}}/base.js?v={{{version}}}"></script>
</body>
</html>
```

Run `simple_tpl:prod`, it will output:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CCT</title>
	<link rel="stylesheet" href="//cdn.com/w/1604/c/global.css?v=1604211431">
</head>
<body>
	<a href="http://www.domain.com/home.html"><img src="//cdn.com/w/1604/i/logo.png?v=1604211431"></a>
	<script src="//cdn.com/w/1604/j/base.js?v=1604211431"></script>
</body>
</html>
```

CSS templates:
```css
.logo {
	background: url('{{{img_path}}}/logo.png?v={{{version}}}');
}
```

Run `simple_tpl:prod`, it will output:
```css
.logo {
	background: url('//cdn.com/w/1604/i/logo.png?v=1604211431');
}
```


## Release History

 * 2016-04-12   v0.1.0   Published.
