# \<complex.h\>

Reference: [\<complex.h\>](https://en.cppreference.com/w/c/complex)

Relevant Zig documentation:
- [std.math.complex](https://ziglang.org/documentation/master/std/#std;math.complex)

### [C imaginary](https://en.cppreference.com/w/c/numeric/complex/imaginary)

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


### [Zig Complex Type](https://ziglang.org/documentation/master/std/#std;math.complex.Complex)

In Zig complex numbers are represented as `Complex` type.
It takes in two variables, `re` and `im` which represent real and imaginary
numbers respectively.

```zig
const complex = @import("std").math.complex;

const Complex = complex.Complex;

const z1 = Complex { re: 0, im: 1.0 } ;
const z2 = Complex { re: 0, im: 2.0 };


test "complex multiplication" {
  const zSquared: Complex = complex.mul(z1, z2);
  std.debug.print("{d} + i{d}\n", zSquared.re, zSquared.im);
}
```
---

**Functions**

Here are a few functions in __C__ with their __Zig__ equivalent. 

## [cexp](https://en.cppreference.com/w/c/numeric/complex/cexp)

Looking at an example in C:

```c
double PI = acos(-1);
double complex z = cexp(I * PI); // Euler's formula
printf("exp(i * pi) = %.lf% + .1fi\n", creal(z), cimag(z));
```

In Zig you use [std.math.complex.exp](https://ziglang.org/documentation/master/std/#std;math.complex.exp) to represent the same

```zig
const math = @import("std").math. 
const complex = math.complex;

const PI = math.acos(- 1);

const z = complex.mul(complex.Complex { re: I, im:  }, PI);
```

