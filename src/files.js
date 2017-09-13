import glob from 'glob'

export const options = {
	root: '../',
}

export const getFiles = path => new Promise((resolve, reject) => {
	glob(`${path}/**/**.js`, options, (err, files) => {
		resolve(files)
	})
})
