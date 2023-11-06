<script setup lang="ts">

import {NavbarItemType} from "src/widgets/Navbar/model/links";
import {getComponentSvg} from "src/shared/lib/getComponentSvg";
interface Props {
	link: NavbarItemType;
	isActive: boolean;
}

const { link, isActive } = defineProps<Props>();

const iconLoader = getComponentSvg(link.iconName);
</script>

<template>
	<a
		:href="link.path"
		:class="[isActive ? 'icon' : '', 'nav-link']"
	>
		<span class="nav-link__title">{{ link.text }}</span>
		<span class="nav-link__svg">
			<component
				:is="iconLoader"
				class="nav-link__svg-icon"
			/>
		</span>
	</a>
</template>

<style lang="scss" scoped>
.nav-link {
	font-size: 1.2em;
	position: relative;
	color: var(--primary-color);
	padding: 5px 30px;
	text-decoration: none;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	cursor: pointer;

	&::after {
		content: '';
		height: 1px;
		width: 100%;
		background-color: var(--primary-color);
		position: absolute;
		transform: translateY(20px);
		transition: .8s;
	}

	&:hover::after {
		transform: translateY(14px);
	}

	span {
		transition: .3s;
		transition-delay: calc(.05s * var(--i));
	}

	&__svg-icon {
		width: 25px;
		height: 25px;
	}

	&.icon &__svg{
		transform: translateY(0px);
	}

	&.icon &__title{
		transform: translateY(-30px);
	}

	&__svg {
		position: absolute;
		transform: translateY(35px);
	}
}

@media screen and (max-width: 1024px){
	.nav-link {
		font-size: 1em;
	}
}

@media screen and (max-width: 768px){
	.nav-link {
		padding: 5px 15px;
	}
}

@media screen and (max-width: 530px){
	.nav-link {
		font-size: .9em;
		padding: 0;

		&.icon {
			font-size: 1.2em;
			width: 70px;
		}

		span {
			transition-delay: calc(.02s * var(--i));
		}

		&__svg-icon {
			width: 18px;
			height: 18px;
		}
	}
}
</style>