import {fromNullable, tryCatch} from '../src';

describe(`either datatype functions`, () => {
	describe(`'fromNullable'`, () => {
		it(`should be a fn`, () => {
			expect(typeof fromNullable).toBe('function');
		});
		it(`should return a Right when the Either predicate resolves to true`, () => {
			const obj = { detail: 'some detail' };
			const actual = fromNullable(obj)
				.map(detail)
				.fold(returnErr, returnX);
			expect(actual).toEqual('some detail');
		});
		describe(`should stop processing when applied to`, () => {
			const expectLeft = x => expect(x).toEqual(null);
			it(`'false'`, () => {
				const obj = false;
				const actual = fromNullable(obj)
					.map(detail)
					.fold(returnErr, returnX);
				expectLeft(actual);
			});
			it(`'undefined'`, () => {
				const obj = undefined;
				const actual = fromNullable(obj)
					.map(detail)
					.fold(returnErr, returnX);
				expectLeft(actual);
			});
		});
	});
	describe(`'tryCatch'`, () => {
		it(`should be a fn`, () => {
			expect(typeof tryCatch).toBe('function');
		});
	});
});
const pluck = x => obj => obj[x];
const detail = pluck('detail');
const returnErr = e => e;
const returnX = x => x;