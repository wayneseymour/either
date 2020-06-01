export const Right = x =>
  ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
  });

Right.of = function of(x) {
  return Right(x);
};

export function right(x) {
  return Right.of(x);
}

export const Left = x =>
  ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
  });

Left.of = function of(x) {
  return Left(x);
};

export function left(x) {
  return Left.of(x);
}

const isNothing = x => {
  return (
    x !== null &&
    x !== undefined &&
    x !== false &&
    x !== 'undefined'
  )
}

export const fromNullable = x =>
  isNothing(x)
    ? Left(null)
    : Right(x);

export const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};
