<script setup lang="ts">
import SomeIcon from '../assets/icons/logo.svg';
import LikeIcon from '../assets/icons/like.svg';
import CartIcon from '../assets/icons/cart.svg';
</script>

<template>
	<div class="header">
		<div>
			<SomeIcon/>
		</div>
		<div class="header__icons">
			<LikeIcon class="header__icon-like"/>
			<CartIcon class="header__icon-cart"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.header {
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: var(--padding-container-l);
	background-color: var(--bg-color-header);
	min-height: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;

	&__icons {
		display: flex;
		align-items: center;
		gap: 20px;
	}


	&__icon-cart {
		height: 60px;
		width: 60px;
	}

	&__icon-like {
		height: 45px;
		width: 45px;
	}

}

</style>