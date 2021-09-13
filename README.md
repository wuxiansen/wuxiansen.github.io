# jekyll-rtd-theme

![CI](https://github.com/rundocs/jekyll-rtd-theme/workflows/CI/badge.svg?branch=develop)
![jsDelivr](https://data.jsdelivr.com/v1/package/gh/rundocs/jekyll-rtd-theme/badge)

Just another documentation theme compatible with GitHub Pages

## What it does?

This theme is inspired by [sphinx-rtd-theme](https://github.com/readthedocs/sphinx_rtd_theme) and refactored with:

- [@primer/css](https://github.com/primer/css)
- [github-pages](https://github.com/github/pages-gem) ([dependency versions](https://pages.github.com/versions/))

## Quick start

```yml
remote_theme: rundocs/jekyll-rtd-theme
```

You can [generate](https://github.com/rundocs/starter-slim/generate) with the same files and folders from [rundocs/starter-slim](https://github.com/rundocs/starter-slim/)

## Usage

Documentation that can guide how to create with Github pages, please refer to [rundocs.io](https://rundocs.io) for details

## Features

- Shortcodes (Toasts card, mermaid)
- Pages Plugins (emoji, gist, avatar, mentions)
- Auto generate sidebar
- [Attribute List Definitions](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions) (Primer/css utilities, Font Awesome 4)
- Service worker (caches)
- SEO (404, robots.txt, sitemap.xml)
- Canonical Link (Open Graph, Twitter Card, Schema data)

## Options

| name          | default value        | description       |
| ------------- | -------------------- | ----------------- |
| `title`       | repo name            |                   |
| `description` | repo description     |                   |
| `url`         | user domain or cname |                   |
| `baseurl`     | repo name            |                   |
| `lang`        | `en`                 |                   |
| `direction`   | `auto`               | `ltr` or `rtl`    |
| `highlighter` | `rouge`              | Cannot be changed |

```yml
# folders sort
readme_index:
  with_frontmatter: true

meta:
  key1: value1
  key2: value2
  .
  .
  .

google:
  gtag:
  adsense:

mathjax: # this will prased to json, default: {}

mermaid:
  custom:     # mermaid link
  initialize: # this will prased to json, default: {}

scss:   # also _includes/extra/styles.scss
script: # also _includes/extra/script.js

translate:
  # shortcodes
  danger:
  note:
  tip:
  warning:
  # 404
  not_found:
  # copyright
  revision:
  # search
  searching:
  search:
  search_docs:
  search_results:
  search_results_found: # the "#" in this translate will replaced with results size!
  search_results_not_found:

plugins:
  - jemoji
  - jekyll-avatar
  - jekyll-mentions
```

## 本地查看自己的博客
有时候，在提交到github之前，咱们总想先看看博文的效果如何，既然github采用的也是Jekyll，那么咱们完全可以采用Jekyll在本地构建网站，查看博文效果。

按照Ruby（请务必确保版本在1.9.3以上）

可以参照官网教程进行安装，这里，如果你使用的是Mac，可以安装如下：

```sh
$ brew install ruby
```
安装Github pages

Github pages其实就是github基于Jekyll用来构建github.io的工具，安装好Ruby之后可以执行：

```sh
$ gem install github-pages
```
开启Jekyll本地服务


```sh
$ cd keysaim.github.io
$ jekyll serve --watch
```
默认情况下，该服务会侦听在本地4000的端口上，可以打开浏览器访问http://127.0.0.1:4000，这样就可以在本地查看自己的博文效果了。

## The license

The theme is available as open source under the terms of the MIT License
