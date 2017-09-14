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
}
