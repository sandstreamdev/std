export default (m1, m2) => ({
  a: m1.a * m2.a + m1.c * m2.b,
  c: m1.a * m2.c + m1.c * m2.d,
  e: m1.a * m2.e + m1.c * m2.f + m1.e,
  b: m1.b * m2.a + m1.d * m2.b,
  d: m1.b * m2.c + m1.d * m2.d,
  f: m1.b * m2.e + m1.d * m2.f + m1.f
});
