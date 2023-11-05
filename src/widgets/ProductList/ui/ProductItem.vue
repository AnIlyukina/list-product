<script setup lang="ts">
import {Product} from "../model/product";
import CartIcon from "src/app/styles/assets/icons/cart.svg";
import FavoriteIcon from "src/app/styles/assets/icons/favorite.svg";

interface Props {
	product: Product
}

const { product } = defineProps<Props>()

</script>

<template>
	<div class="item">
		<div>
			<img
				:src="product.image"
				alt="фото товара"
				class="item__image"
			/>
			<p class="item__text_type_title item__text">{{product.title}}</p>
			<p class="item__text_type_description item__text">{{product.description}}</p>
		</div>
		<div class="item__buy-block">
			<div>
				<span class="item__price">{{product.price}}&nbsp;₽</span>
			</div>

			<div class="item__buttons">
				<button class="item__button">
					<FavoriteIcon class="item__button-icon"/>
				</button>
				<button class="item__button">
					<CartIcon class="item__button-icon"/>
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	padding: 20px;
	border-radius: 10px;
	background-color: var(--bg-color-card);
	color: var(--primary-color);
	border: 1px solid rgba(0, 0, 0, 0.1);

	&__image {
		width: 100%;
		height: 200px;
		object-fit: contain;
		border-radius: 10px;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -moz-box;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		display: -webkit-box;

		&_type {
			&_title {
				font-weight: 600;
				margin-top: 10px;
				-webkit-line-clamp: 2;
				line-clamp: 2;
			}

			&_description {
				text-align: justify;
				font-size: 0.8em;
				margin-top: 5px;
				-webkit-line-clamp: 3;
				line-clamp: 3;
			}
		}
	}

	&__buy-block {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__price {
		font-weight: 600;
		font-size: 1.5em;
	}

	&__button-icon {
		width: 25px;
		height: 25px;
	}

	&__button {
		cursor: pointer;
		margin-left: 10px;
		padding: 5px 10px;
		background-color: transparent;
		border: none;
	}
}

@media screen and (max-width: 1024px) {
	.item {
		&__image {
			height: 160px;
		}

		&__price {
			font-size: 1.2em;
		}

		&__button-icon {
			width: 20px;
			height: 20px;
		}

		&__button {
			margin-left: 5px;
			padding: 5px 5px;
		}
	}
}

@media screen and (max-width: 530px) {
	.item {
		padding: 10px 15px;

		&__image {
			height: 120px;
		}

		&__price {
			font-size: 1em;
		}

		&__text {
			&_type {
				&_description {
					-webkit-line-clamp: 2;
					line-clamp: 2;
				}
			}
		}
	}
}

</style>