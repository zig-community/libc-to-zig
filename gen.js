const fs = require("fs");

const files = [
  "assert_h.md",  "complex_h.md",     "ctype_h.md",    "errno_h.md",
  "fenv_h.md",    "float_h.md",       "inttypes_h.md", "iso646_h.md",
  "limits_h.md",  "locale_h.md",      "math_h.md",     "setjmp_h.md",
  "signal_h.md",  "stdalign_h.md",    "stdarg_h.md",   "stdatomic_h.md",
  "stdbool_h.md", "stddef_h.md",      "stdint_h.md",   "stdio_h.md",
  "stdlib_h.md",  "stdnoreturn_h.md", "string_h.md",   "tgmath_h.md",
  "threads_h.md", "time_h.md",        "uchar_h.md",    "wchar_h.md",
  "wctype_h.md",
];

files.forEach(file => {
  const fileTitle = file.slice(0, file.length - 5);
  const fileUrl = `https://en.cppreference.com/w/c/${fileTitle}`;
  const fileHeader = `\\<${fileTitle}.h\\>`;

  const fileContent = `# ${fileHeader}

Reference: [${fileHeader}](${fileUrl})

## Types

## Functions

`;

  fs.writeFileSync(`${fileTitle}_h.md`, fileContent);
})
