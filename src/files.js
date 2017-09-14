import glob from 'glob'
import fs from 'fs'

/**
 * @module files
 */

/**
 * glob options
 * @type {Object}
 * @memberof module:files
 */
export const options = {
	root: '../',
}

export const readFile = path => new Promise((resolve, reject) =>
	fs.readFile(path, { encoding: 'utf-8' }, (error, data) => {
		if (error) {
			resolve({ error })
		}

		resolve(data)
	}))

/**
 * extending glob options
 * @memberof module:files
 * @param {Object} opt options
 * @returns {Object}
 */
export const getOptions = opt => ({ ...options, ...opt })

/**
 * Return matched files
 * @memberof module:files
 * @param {string} path to find files
 * @param {Object} opt options
 * @returns {Promise<Array>}
 */
export const getFiles = (path, opt = {}) => new Promise((resolve, reject) => {
	if (!path) {
		reject({ error: 'Error: No path specified' })
	}

	glob(`${path}/**/**.js`, getOptions(opt), (err, files) => {
		resolve(files)
	})
})
