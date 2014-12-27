# LaTeX/BibTeX Watcher

> Simple script watching for changes on LaTeX or BibTeX files and rebuilding on every change

When writing an essay, article, or thesis using LaTeX and BibTeX, you have to run a bunch of commands each and every time you want to compile your LaTeX stuff into a PDF file. Therefore I wrote this tiny script in JavaScript that watches a directory (deeply) for changes on LaTeX (`.tex`) or BibTeX (`.bib`) files and recompiles your document every time a change occurs (i.e. if a file is modified/saved). That’s not exactly setting the world on fire but may be useful for some of you.

## Getting started

1. [Download the latest version](https://github.com/rasshofer/latex-bibtex-watcher/archive/master.zip)
2. Unzip the downloaded ZIP archive into your working directory
3. Run `npm install` in order to fetch all required dependencies

(You may want to copy over the `.gitignore` file included in this repository as it includes a bunch of entries for LaTeX and node.js if you’re using Git during writing your essay/article/thesis.)

You can also clone this repository initially as a template and change the `origin` remote to your personal repository (e.g. `my-fancy-essay`).

```shell
git clone https://github.com/rasshofer/latex-bibtex-watcher my-fancy-essay
cd my-fancy-essay
git remote set-url origin https://github.com/johndoe/my-fancy-essay
npm install
```

## Usage

```shell
node watcher {FILENAME}
```

## Example

Assuming your main document is called `essay.tex`, all you need to run is the following command.

```shell
node watcher essay
```

![](https://picpig.com/6rqp95f5vu.png)

## Changelog

* 0.0.1
	* Initial version

## TODO

- Error handling
- Documentation
- Tests

## License

Copyright (c) 2014 [Thomas Rasshofer](http://thomasrasshofer.com/)  
Licensed under the MIT license.

See LICENSE for more info.
