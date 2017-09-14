import {
	options,
	getOptions,
	getFiles,
	readFile,
} from '../files'

jest.unmock('../files')

describe('on files', () => {
	it('on options snapshot', () => {
		expect(options).toMatchSnapshot()
	})

	it('on getOptions by default', () => {
		expect(getOptions()).toEqual(options)
	})

	it('on getOptions modify', () => {
		const root = '.sd/'
		expect(getOptions({ root })).toEqual({ root })
	})

	it('on getOptions extend', () => {
		const test = '.sd/'
		expect(getOptions({ test })).toEqual({ test, root: '../' })
	})

	it('on getFiles reject', async () => {
		try {
			await getFiles()
		} catch (e) {
			expect(e).toEqual({
				error: 'Error: No path specified',
			})
		}
	})

	it('on getFiles resolve files', async () => {
		const files = await getFiles('./src/__mock__/src')
		expect(files.length).toEqual(4)
	})

	it('on readFile', async () => {
		const mock = `sadf
asd

sdfe
`
		const code = await readFile('./src/__mock__/src/text/text.js')
		expect(code).toEqual(mock)
	})

	it('on readFile error', async () => {
		const code = await readFile('./src/__mock__/src/text/text.jsd')
		expect(code.error).toBeTruthy()
	})
})
