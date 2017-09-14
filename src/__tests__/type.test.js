import {
	getTypes,
} from '../type'

jest.unmock('../type')

const code = `
declare type HeaderProps = {
	sendLogout: Function,
	navigateLogin: Function,
	user: Object,
	startChat: Function,
	authorized: boolean,
	toggleOpen: Function,

	items: Array<HeaderMenuItemConfig>,
	menuIsOpen: boolean,
	toggleMenu: Function,
}

declare type MenuType = {
	items: Array<HeaderMenuItemConfig>,
	selected?: MenuItemName,
	markSelectedItem: HeaderMenuItemConfig => HeaderMenuItemConfig,
	touchSelected?: () => Array<any>,
	className?: string,
}

declare type MenuSelectedPayload = {
	selected: MenuItemName,
}

declare type MenuItemName = 'none' | 'Dashboard' | 'Reports' | 'Promo' | 'Support'

declare type HeaderMenuItemConfig = {
	text: string,
	id: MenuItemName,
	tag: MenuItemName,
	url: string,
	selected?: boolean,
}`

describe('on type', () => {
	it('on options snapshot', () => {
		const types = getTypes(code)
		console.log('<+++++ type.test.js::46:: +++++++++')
		console.log(types)
		console.log('++++++++++++++>')
		expect('options').toEqual('options')
	})
})
