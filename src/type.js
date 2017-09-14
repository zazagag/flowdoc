import { parse } from 'flow-parser'

export const options = {
	types: true,
}

export const getAst = (code) => {
	const ast = parse(code, options)
	if (ast.error) {
		throw new Error('Error while parsing flow')
	}
	return ast
}

export const getTypeName = (type) => {
	console.log('<+++++ type.js::4::getName +++++++++')
	console.log(type)
	console.log('++++++++++++++>')
}

export const flattenType = () => {

}

export const getTypes = (code) => {
	return getAst(code)
	const { body } = getAst(code)

	return body
}
