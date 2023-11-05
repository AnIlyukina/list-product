export interface NavbarItemType {
	path: string;
	text: string;
	iconName: string;
}

export const NavbarLinksList: NavbarItemType[] = [
	{
		path: '#',
		iconName: 'catalog',
		text: 'Каталог',
	},
	{
		path: '#',
		iconName: 'search',
		text: 'Поиск',
	},
	{
		path: '#',
		iconName: 'favorite',
		text: 'Избранное',
	},
	{
		path: '#',
		iconName: 'cart',
		text: 'Корзина',
	}
];