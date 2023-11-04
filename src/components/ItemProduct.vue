<script setup lang="ts">
import {Product} from "../types/types";

interface Props {
	product: Product
}

const { product } = defineProps<Props>()

</script>

<template>
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

		<div>
			Лайк
			Корзина
		</div>
	</div>
</template>

<style lang="scss" scoped>

.item {
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
		font-size: 25px;
	}

}

</style>