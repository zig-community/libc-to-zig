# LibC to Zig

Repository for site hosted at [libc-to-zig.netlify.app](https://libc-to-zig.netlify.app)

# File Structure

```sh
| - etc/                        # all extra files
|       - _sidebar.md           # code for the sidebar
| - headers/                    # header files
|       - *_h.md                # all the header docs
| - tips_tricks                 # tips and tricks
|       - *.md                  # tips and tricks docs
| - README.md                   # README to the current repo
| - gen.js                      # script to generate files - ignore
| - index.html                  # entry html file
| - index.md                    # HOME page
```

# Building the Repo

The documentation uses [docsify.js](https://docsify.js.org/)

Have NodeJS installed. Then:

INSTALLATION:

Install docsify-cli:

```sh
npm i -g docsify-cli
```

Clone the repo:

```
git clone https://github.com/zig-community/libc-to-zig
```

DEV:

```
docsify serve libc-to-zig
```

BUILD:

```
docsify build libc-to-zig
```

# LICENSE

[MIT](./LICENSE)

