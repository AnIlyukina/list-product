<script setup lang="ts">
import {getComponentSvg} from "src/shared/lib/getComponentSvg";

interface Props {
	isActive?: boolean;
	iconName?: string
}

const {iconName} = defineProps<Props>();

const iconLoader = getComponentSvg( iconName);

</script>

<template>
	<button :class="[isActive ? 'active' : '', 'app-button']">
		<component
			:is="iconLoader"
			class="app-button__icon"
		/>
	</button>
</template>

<style lang="scss" scoped>
.app-button {
	cursor: pointer;
	padding: 5px 5px;
	background-color: transparent;
	border: none;
	transition: .5s;
	display: flex;
	align-items: center;

	&.active {
		background-color: #ffb1b1;
		border-radius: 50%;
	}

	&__icon {
		width: 25px;
		height: 25px;
	}
}

@media screen and (max-width: 1024px) {
	.app-button {
		padding: 5px 5px;

		&__icon {
			width: 20px;
			height: 20px;
		}
	}
}
</style>