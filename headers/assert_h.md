# \<assert.h\>

C Reference: [\<assert.h\>](https://en.cppreference.com/w/c/error)

Relevant Zig Documentation:
  - [std.debug.assert](https://ziglang.org/documentation/master/std/#std;debug.assert)

## [assert()](https://en.cppreference.com/w/c/error/assert)

For the following C code, which will immediately abort the program if the condition is false. 

```c
double x = -1.0;
assert(x >= 0.0);
```

**Equivalent Zig implementation:**

```zig
const assert = std.debug.assert;
// ...
const x: double = -1.0;
assert(x >= 0.0); // undefined behaviour
```

This will invoke an undefined behaviour when the condition is `false`. Checkout [std.debug.assert](https://ziglang.org/documentation/master/std/#std;debug.assert)
for more information.

#### Testing with Assert

In Zig, it is recommended to use functions provided by [std.testing](https://ziglang.org/documentation/master/std/#std;testing)
when you are trying to do assertion inside `tests`.

For the above example, use:

```zig
const testing = std.testing;

test "testing double size" {
  const x: double = -1.0;
  testing.expect(x >= 0.0); // test fails!
}
```

Here, a message is printed to `stderr` and then `abort` is called. Another alternative would be:

```zig
const testing = std.testing;

test "testing equivalence" {
  const x1: double = -1.970;
  const x2: double = -1.970;
  std.testing.expectApproxEqAbs(x1, x2, 0.0000001); // floating point number comparison with tolerance

  const x3: int = 1;
  const x4: int = 2;
  std.testing.expectEq(x3, x3); // failed tests
}
```

## [static_assert](https://en.cppreference.com/w/c/error/static_assert)

Zig handles compile time diagnostic without any extra shenanigans. So, use the above functions in a similar fashion.
