<script setup lang="ts">
import LogoIcon from "src/app/styles/assets/icons/logo.svg";
interface Props {
	isActive: boolean;
}

const { isActive } = defineProps<Props>()

</script>

<template>
	<a
		href="#"
		:class="[isActive ? 'icon' : '', 'app-logo']"
	>
		<span class="app-logo__logo"><LogoIcon class="app-logo__svg-icon"/></span>
		<span class="app-logo__name">Craze</span>
	</a>
</template>

<style lang="scss" scoped>
.app-logo {
	position: relative;
	font-size: 2em;
	font-weight: bold;
	text-decoration: none;
	padding: 5px 0;
	color: var(--primary-color);
	overflow: hidden;

	span {
		transition: .5s;
		display: block;
	}

	&__svg-icon {
		width: 40px;
		height: 40px;
	}

	&__logo{
		position: absolute;
		transform: translateY(-90px);
	}

	&.icon &__logo {
		transform: translateY(-8px);
	}

	&.icon &__name {
		transform: translateY(45px);
	}
}

@media screen and (max-width: 1024px){
	.app-logo {
		font-size: 1.5em;
	}
}

@media screen and (max-width: 530px){
	.app-logo {
		transition: .5s;
		font-size: 1em;
		display: flex;
		gap: 10px;
		align-items: center;

		&.icon {
			transform: translateY(-25px);
		}

		span{
			display: inline-block;
		}

		&__logo{
			position: relative;
			transform: translateY(0px);
		}

		&.icon &__logo{
			transform: translateY(0px);
		}

		&.icon &__name{
			transform: translateY(0px);
		}

		&__svg-icon {
			width: 30px;
			height: 30px;
		}
	}
}
</style>