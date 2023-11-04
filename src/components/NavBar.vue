<script setup lang="ts">
import {ref, onMounted} from "vue";
import LogoIcon from '../assets/icons/logo.svg';
import CatalogIcon from '../assets/icons/catalog.svg';
import SearchIcon from '../assets/icons/search.svg';
import FavoriteIcon from '../assets/icons/favorite.svg';
import CartIcon from '../assets/icons/cart.svg'
import {onUnmounted} from "vue";

let lastScrollTop = 0;

const navbar = ref<HTMLElement | null>(null)

onMounted(() => {
	window.addEventListener('scroll', toggleAnimation)
})

const toggleAnimation = () => {
	if (navbar.value) {
		let scrollTop = window.pageYOffset;
		document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			navbar.value.classList.add('icon');
		} else {
			navbar.value.classList.remove('icon');
		}
		lastScrollTop = scrollTop;
	}
}

onUnmounted(() => {
	window.removeEventListener('scroll', toggleAnimation)
})
</script>

<template>
	<nav class="navbar" ref="navbar">
		<a href="#" class="navbar__brand">
			<span><LogoIcon class="navbar__logo"/></span>
			<span>Craze</span>
		</a>

		<ul class="navbar__list">
			<li style="--i:0" class="navbar__item">
				<a href="#" class="navbar__item-link">
					<span>Каталог</span>
					<span><CatalogIcon class="navbar__item-svg"/></span>
				</a>
			</li>

			<li style="--i:1 " class="navbar__item">
				<a href="#"  class="navbar__item-link">
					<span>Поиск</span>
					<span><SearchIcon class="navbar__item-svg"/></span>
				</a>
			</li>

			<li style="--i:2 " class="navbar__item">
				<a href="#" class="navbar__item-link">
					<span>Избранное</span>
					<span><FavoriteIcon class="navbar__item-svg"/></span>
				</a>
			</li>


			<li style="--i:4 " class="navbar__item">
				<a href="#" class="navbar__item-link">
					<span>Корзина</span>
					<span><CartIcon class="navbar__item-svg"/></span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>

.navbar {
	position: fixed;
	top: 0;
	width: 100%;
	height: var(--height-navbar);
	background-color: var(--bg-color-header);
	padding: var(--padding-container-l);
	transition: .5s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	border-bottom: 1px solid var(--primary-color);

	&.icon {
		height: 80px;
	}

	&__brand {
		position: relative;
		font-size: 1.8em;
		font-weight: bold;
		text-decoration: none;
		padding: 5px 0;
		color: var(--primary-color);
		overflow: hidden;
		cursor: auto;
	}

	&__brand span{
		transition: .5s;
		display: block;
	}

	&__logo {
		width: 40px;
		height: 40px;
	}

	&__item-svg {
		width: 25px;
		height: 25px;
	}

	&__brand span:nth-child(1){
		position: absolute;
		transform: translateY(-90px);
	}

	&__list {
		display: flex;
	}

	&__item {
		list-style: none;
	}

	&.icon &__brand span:nth-child(1){
		transform: translateY(-8px);
	}

	&.icon &__brand span:nth-child(2){
		transform: translateY(45px);
	}

	&__item-link {
		position: relative;
		color: var(--primary-color);
		padding: 5px 30px;
		//font-size: 1.1em;
		text-decoration: none;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		cursor: pointer;
	}

	&__item-link::after {
		content: '';
		height: 1px;
		width: 100%;
		background-color: var(--primary-color);
		position: absolute;
		transform: translateY(20px);
		transition: .8s;
	}
	&__item-link:hover::after {
		transform: translateY(14px);
	}

	&__item-link span {
		transition: .3s;
		transition-delay: calc(.05s * var(--i));
	}

	&__item-link span:nth-child(2) {
		position: absolute;
		transform: translateY(35px);
		//font-size: 1.6em;
	}

	&.icon &__item-link span:nth-child(2) {
		transform: translateY(0px);
	}

	&.icon &__item-link span:nth-child(1) {
		transform: translateY(-30px);
	}
}
</style>