<script setup lang="ts">
import {ref, onMounted, onUnmounted} from "vue";

import AppLogo from "src/shared/ui/AppLogo/AppLogo.vue";
import NavLink from 'src/shared/ui/NavLink/NavLink.vue';
import {NavbarLinksList} from "../model/links";


let lastScrollTop = 0;
const navbar = ref<HTMLElement | null>(null)
let isActive = ref(false)

onMounted(() => {
	window.addEventListener('scroll', toggleAnimation)
})

const toggleAnimation = () => {
	if (navbar.value) {
		let scrollTop = window.pageYOffset;
		document.documentElement.scrollTop;
		isActive.value = scrollTop > lastScrollTop;
		lastScrollTop = scrollTop;
	}
}

onUnmounted(() => {
	window.removeEventListener('scroll', toggleAnimation)
})
</script>

<template>
	<nav class="navbar" :class="[isActive ? 'icon' : 'navbar']" ref="navbar">
		<app-logo :isActive="isActive"/>

		<ul class="navbar__list">
			<li v-for="(link, index) in NavbarLinksList" :style="{'--i': index}" class="navbar__item">
				<nav-link :link="link" :isActive="isActive"/>
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
	padding: var(--padding-container);
	transition: .5s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	border-bottom: 1px solid var(--primary-color);

	&.icon {
		height: var(--height-navbar-on-scroll);
	}

	&__list {
		display: flex;
	}

	&__item {
		list-style: none;
	}
}

@media screen and (max-width: 530px){
	.navbar {
		flex-direction: column;

		&__list {
			width: 100%;
			justify-content: space-around;
		}
	}
}
</style>