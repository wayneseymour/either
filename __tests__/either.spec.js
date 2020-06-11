import {fromNullable, tryCatch, left, right } from '../src';

const noop = () => {};

describe(`either algebraic datatype functions`, () => {
	describe(`helpers`, () => {
		it(`'fromNullable' should be a fn`, () => {
			expect(typeof fromNullable).toBe('function');
		});
		it(`'tryCatch' should be a fn`, () => {
			expect(typeof tryCatch).toBe('function');
		});
		it(`'left' should be a fn`, () => {
			expect(typeof left).toBe('function');
		});
		it(`'right' should be a fn`, () => {
			expect(typeof right).toBe('function');
		});
	});
	describe('tryCatch', () => {
		let sut;
		beforeAll(() => {
			sut = undefined;
		});
		it(`should return a 'Left' on error`, () => {
			sut = tryCatch(() => {
				throw new Error('blah');
			});
			expect(sut.inspect()).toBe('Left(Error: blah)');
		});
		it(`should return a 'Right' on successful execution`, () => {
			sut = tryCatch(noop);
			expect(sut.inspect()).toBe('Right(undefined)')
		});
	});
	describe(`'fromNullable`, () => {
		it(`should continue processing if a truthy is calculated`, () => {
			attempt({detail: 'x'})
				.fold(() => {
				}, x => expect(x).toEqual('x'));
		});
		it(`should drop processing if a falsey is calculated`, () => {
			attempt(false)
				.fold(expectNull, () => {
				});
		});
	});
});
const pluck = x => obj => obj[x];
const expectNull = x => expect(x).toEqual(null);
const attempt = obj =>
	fromNullable(obj)
		.map(pluck('detail'));
