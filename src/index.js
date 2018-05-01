export const Right = x =>
	({
		chain: f => f(x),
		map: f => Right(f(x)),
		fold: (f, g) => g(x),
		inspect: () => `Right(${x})`
	});

export const Left = x =>
	({
		chain: f => Left(x),
		map: f => Left(x),
		fold: (f, g) => f(x),
		inspect: () => `Left(${x})`
	});

export const fromNullable = x =>
	(x !== null && x !== undefined && x !== false)
		? Right(x)
		: Left(null);

export const tryCatch = f => {
	try {
		return Right(f())
	} catch (e) {
		return Left(e)
	}
};

