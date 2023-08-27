// -------------------
// Math
// -------------------

export const lerpRounded = (a, b, u) => Math.round((1 - u) * a + u * b);

export const lerp = (a, b, u) => (1 - u) * a + u * b;
