import {fromNullable, tryCatch} from '../lib';

describe(`either datatype functions`, () => {
	it(`'fromNullable' should be a fn`, () => {
		expect(typeof fromNullable).toBe('function');
	});
	it(`'tryCatch' should be a fn`, () => {
		expect(typeof tryCatch).toBe('function');
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
const attempt = obj => fromNullable(obj)
	.map(pluck('detail'));
