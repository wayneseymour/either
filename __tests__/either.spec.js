import {fromNullable, tryCatch} from '../src';

describe(`either datatype functions`, () => {
	describe(`'fromNullable'`, () => {
		it(`should be a fn`, () => {
			expect(typeof fromNullable).toBe('function');
		});
		it(`should drop processing if a false is calculated`, () => {
			const obj = false;
			fromNullable(obj)
				.map(pluck('detail'))
				.fold(x => expect(x).toEqual(null), x => console.log(`\n### x: \n\t${x}`));
		});
	});
	describe(`'tryCatch'`, () => {
		it(`should be a fn`, () => {
			expect(typeof tryCatch).toBe('function');
		});
	});
});
const pluck = x => obj => obj[x];

