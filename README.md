# LibC to Zig 

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f49d2b0-76bf-4632-9963-f64997de0242/deploy-status)](https://app.netlify.com/sites/libc-to-zig/deploys)

Source code for LibC to Zig documentation hosted at [libc-to-zig.netlify.app](https://libc-to-zig.netlify.app)

# Building the repo

The repo is a Hugo generated documentation

## Step 1: Install Hugo
To get started make sure you have Hugo extended installed (NOTE: Hugo extended is not equivalent to Hugo) 

Here are the download links:

Windows: [Hugo Extended Windows 0.82.0](https://github.com/gohugoio/hugo/releases/download/v0.82.0/hugo_0.82.0_Windows-64bit.zip)
Linux 64-bit: [Hugo Extended Linux 64-bit 0.82.0](https://github.com/gohugoio/hugo/releases/download/v0.82.0/hugo_0.82.0_Linux-64bit.tar.gz)
Linux ARM64: [Hugo Extended Linux ARM64 0.82.0](https://github.com/gohugoio/hugo/releases/download/v0.82.0/hugo_0.82.0_Linux-ARM64.tar.gz)
MacOS-64bit: [Hugo Extended MacOS 64-bit 0.82.0](https://github.com/gohugoio/hugo/releases/download/v0.82.0/hugo_0.82.0_macOS-64bit.tar.gz)
MacOS-ARM64: [Hugo Extended MacOS ARM64 0.82.0](https://github.com/gohugoio/hugo/releases/download/v0.82.0/hugo_0.82.0_macOS-ARM64.tar.gz)

## Step 2: clone and run

```sh
git clone https://github.com/zig-community/libc-to-zig.git
cd libc-to-zig
hugo server --theme book
```

## To generate the html:

```sh
hugo
```

## File structure:

```
| content/
|       | menu/
|       |       | index.md       
|       | *.md
| resources/
| static/
| themes/
| config.toml
```

- [content](./content): Contains the documentation files
  - [menu/](./content/menu)
    - [\_index.md](./content/menu/_index.md): Table of Contents menu
  - [\*.md](./content/_index.md): Pages of the documentation

Edit files in `/content` folder
