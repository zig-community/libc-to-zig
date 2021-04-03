# \<complex.h\>

C Reference: [\<complex.h\>][0]

Relevant Zig documentation:
- [std.math.complex][20]

## [C imaginary Type][1]

This type allows you to write imaginary constants in C:

```c
double imaginary i = 2.0 * I; // pure imaginary
double complex z = 1.0 + i; // complex number
```

In Zig, there are no imaginary types and you will be representing
the same using [Complex](#zig-complex-type) struct:

```zig
const complex = @import("std").math.complex;

const imaginary i = 2.0;
const z = complex.Complex { re: 1.0, im: i };
```

!>  Note that imaginary types in C don't have Zig equivalent, you have to denote them as
a [Complex](#zig-complex-type) type.


## [Zig Complex Type][21]

In Zig complex numbers are represented as `Complex` type.
It takes in two variables, `re` and `im` which represent real and imaginary
numbers respectively.

```zig
const std = @import("std");
const complex = std.math.complex;

const Complex = complex.Complex;

const z1 = Complex { re: 0, im: 1.0 } ;
const z2 = Complex { re: 0, im: 2.0 };

test "complex multiplication" {
  const zSquared: Complex = complex.mul(z1, z2);
  std.debug.print("{d} + i{d}\n", zSquared.re, zSquared.im);
}
```
---

## Functions - Manipulation

Here are a few functions in __C__ for handling complex types with their __Zig__ equivalent. 

### [CMPLX, CMPLXF, CMPLXL][2]

They help create the `float complex` type in C. `CMPLXF` and `CMPLXL` are used to create
similar types but for `double` and `long double` respectively.

```c
double complex z = CMPLX(0.0, -0.0);
printf("z = %.1f%+.1fi\n", creal(z), cimag(z));
```
The equivalent Zig code is quite simple:

```zig
const std = @import("std");
const complex = std.math.complex

const z = complex.Complex { re: 0, im: -0.0 };
std.debug.print("{lf}{lf}\n", z.re, z.im);
```

### [crealf, creal, creall][3]

Returns the real part of a complex number in C. 

```c
double complex z = CMPLX(1.0, 2.0);
printf("%f%+fi\n", creal(z), cimag(z));
```

In Zig its just a struct access:

```zig
const z = std.complex.Complex { re: 0, im: -0.0 };
std.debug.print("{lf}+{lf}i\n", z.re, z.im);
```

### [cimag, cimagf, cimagl][4]

Returns the imaginary part of a complex number in C. 

```c
double complex z = CMPLX(1.0, 2.0);
printf("%f%+fi\n", creal(z), cimag(z));
```

In Zig its just a struct access:

```zig
const complex = @import("std").math.complex;

const z = std.math.complex.Complex { re: 0, im: -0.0 };
std.debug.print("{lf}+{lf}i\n", z.re, z.im);
```

### [cabs, cabsf, cabsl][5]

Computes the complex absolute value (Known as norm: `|z|`) of a complex number

```c
double complex z = 1.0 + 1.0 * I;
printf("|%.1f%+.1fi| = %f\n", creal(z), cimag(z), cabs(z));
```

For Zig, [std.math.complex.abs][24] is used and the equivalent code will be:

```zig
const std = @import("std");
const complex = std.math.complex;

const z = complex.Complex { re: 1.0, im: -1.0 };
std.debug.print("|{lf}+{lf}i| = {lf}\n", z.re, z.im, complex.abs(z));
```

### [cargf, carg, cargl][6]

Computes the argument (also called phase angle) of `z`, with a branch cut along
the negative real axis. Here's an example:

```c
double complex z1 = 1.0 + 0.0 * I;
printf("phase angle of %.lf%+.lfi is %f\n", creal(z1), cimag(z1), carg(z1));

double complex z2 = -1.0 + 0.0 * I;
printf("phase angle of %.lf%+.lfi is %f\n", creal(z1), cimag(z1), carg(z1));
```

In Zig we use [std.math.complex.arg][25] for the same. The equivalent code for the above
will be:

```zig
const std = @import("std");
const complex = std.math.complex;
const Complex = complex.Complex;

const z1 = Complex { re: 1.0, im: 0.0 } ;
std.debug.print("phase angle of {lf}+{lf} is {lf}\n", z1.re, z1.im, complex.arg(z1));
const z2 = Complex { re: -1.0, im: 0.0 } ;
std.debug.print("phase angle of {lf}+{lf} is {lf}\n", z2.re, z2.im, complex.arg(z2));
```

### [conjf, conj, conjl][7]

Computes the [complex conjugate][40] of a complex number _z_ by reversing the sign of the imaginary part.
Here's a C example:

```c
double complex z = 1.0 + 2.0*I;
double complex z2 = conj(z);

printf("The conjugate of %.1f%+.1fi is %.1f%+.1fi\n",
    creal(z), cimag(z), creal(z2), cimag(z2));

printf("Their product is %.1f%+.1fi\n", creal(z*z2), cimag(z*z2));
```

In Zig, we use [std.math.complex.Complex.conjugate][23] method for the same:

```zig
const std = @import("std");
const complex = std.math.complex;
const Complex = complex.Complex;

const z1 = Complex { re: 1.0, im: 0.0 };

const z2 = z1.conjugate();

std.debug.print("The conjugate of {lf}+{lf}i is {lf}+{lf}i\n",
    z1.re, z1.im, z2.re, z2.im);

std.debug.print("Their product is {lf}+{lf}i\n", z1.mul(z2).re, z1.mul(z2).im);
```

### [cexp][4]

It computes the complex base-e exponential of `z`. Looking at an example in C:

```c
double PI = acos(-1);
double complex z = cexp(I * PI); // Euler's formula
printf("exp(i * pi) = %.lf% + .1fi\n", creal(z), cimag(z));
```

In Zig you use [std.math.complex.exp][22] to represent the same.

```zig
const math = @import("std").math. 
const complex = math.complex;

const PI = math.acos(- 1);

const z = complex.mul(complex.Complex { re: I, im:  }, PI);
```

!> [cexpf][3] & [cexpl][3] are two variants in C that take `float` and `long double` respectively in C. In Zig those variants
are handled quite well by Zig generics.

<!-- C reference links -->
[0]: https://en.cppreference.com/w/c/numeric/complex "C -Complex"
[1]: https://en.cppreference.com/w/c/numeric/complex/imaginary "C -Imaginary"
[2]: https://en.cppreference.com/w/c/numeric/complex/CMPLX
[3]: https://en.cppreference.com/w/c/numeric/complex/creal
[4]: https://en.cppreference.com/w/c/numeric/complex/cimag
[5]: https://en.cppreference.com/w/c/numeric/complex/cabs
[6]: https://en.cppreference.com/w/c/numeric/complex/carg
[7]: https://en.cppreference.com/w/c/numeric/complex/conj

<!-- Zig stdlib doc links -->
[20]: https://ziglang.org/documentation/master/std/#std;math.complex
[21]: https://ziglang.org/documentation/master/std/#std;math.complex.Complex 
[22]: https://ziglang.org/documentation/master/std/#std;math.complex.exp
[23]: https://ziglang.org/documentation/master/std/#std;math.complex.Complex.conjugate

<!-- Other external links -->
[40]: https://en.wikipedia.org/wiki/Complex_conjugate
