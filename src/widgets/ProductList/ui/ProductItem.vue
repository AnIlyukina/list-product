<script setup lang="ts">
import {Product} from "../model/product";
import AppButton from "src/shared/ui/AppButton/AppButton.vue";
import {ref} from "vue";

interface Props {
	product: Product
}

const isFavorite = ref(false);
const isInCart = ref(false);
const { product } = defineProps<Props>();

const toggleFavorite = () => {
	isFavorite.value = !isFavorite.value;
}

const toggleInCart = () => {
	isInCart.value = !isInCart.value;
}

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
				<app-button
					:icon-name="'favorite'"
					:is-active="isFavorite"
					@click="toggleFavorite"
				/>
				<app-button
					:icon-name="'cart'"
					:is-active="isInCart"
					@click="toggleInCart"
				/>
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
	height: 100%;
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
				font-family: var(--font-family-secondary);
				font-weight: 600;
				margin-top: 10px;
				-webkit-line-clamp: 2;
				line-clamp: 2;
			}

			&_description {
				text-align: justify;
				font-size: .9em;
				margin-top: 10px;
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
		gap: 10px;
	}

	&__buttons {
		display: flex;
		gap: 10px;
	}

	&__price {
		font-weight: 600;
		font-size: 1.5em;
		font-family: var(--font-family-secondary);
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

		&__text {
			&_type {
				&_description {
					font-size: .8em;
				}
			}
		}

		&__buy-block {
			gap: 5px;
		}

		&__buttons {
			gap: 5px;
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
				&_title {
					font-size: .9em;
				}


				&_description {
					-webkit-line-clamp: 2;
					line-clamp: 2;
				}
			}
		}
	}
}
</style>