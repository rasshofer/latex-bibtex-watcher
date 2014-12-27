#!/usr/bin/env node

/*
 * LaTeX/BibTeX Watcher
 * https://github.com/rasshofer/latex-bibtex-watcher
 *
 * Copyright (c) 2014 Thomas Rasshofer <hello@thomasrasshofer.com>
 * Licensed under the MIT license.
 * https://github.com/rasshofer/latex-bibtex-watcher/blob/master/LICENSE
 */

var fs = require('fs')
var shell = require('shelljs')
var watch = require('glob-watcher');
var chalk = require('chalk');

var name = process.argv[2] || 'thesis';
var pattern = process.cwd() + '/**/*.{tex,bib}';

var watcher = watch([pattern]);
console.log('Watching `' + chalk.cyan(pattern) + '` now...');

var rebuild = function() {

  // Clean up
  console.log((new Date()) + ' ' + chalk.inverse('CLEANUP') + ' ' + chalk.yellow('START'));
  [
    'aux',
    'bbl',
    'blg',
    'log',
    'pdf'
  ].forEach(function(extension) {
    if (fs.existsSync(name + '.' + extension)) {
        fs.unlinkSync(name + '.' + extension);
        console.log((new Date()) + ' ' + chalk.inverse('DELETE') + ' `' + chalk.cyan(name + '.' + extension) + '`');
    }
  });
  console.log((new Date()) + ' ' + chalk.inverse('CLEANUP') + ' ' + chalk.green('END'));

  // Build
  console.log((new Date()) + ' ' + chalk.inverse('REBUILD') + ' ' + chalk.yellow('START'));
  [
    'pdflatex ' + name + '.tex',
    'bibtex ' + name,
    'pdflatex ' + name + '.tex',
    'pdflatex ' + name + '.tex'
  ].forEach(function(cmd) {
    shell.exec(cmd, {
      silent: true
    });
    console.log((new Date()) + ' ' + chalk.inverse('EXEC') + ' `' + chalk.cyan(cmd) + '`');
  });

  console.log((new Date()) + ' ' + chalk.inverse('REBUILD') + ' ' + chalk.green('END'));
  console.log('Waiting for changes...');

};

watcher.on('change', function(e) {
  rebuild();
});

rebuild();
