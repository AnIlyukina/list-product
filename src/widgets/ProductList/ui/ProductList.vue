<script setup lang="ts">
import {reactive, ref, onMounted, onUnmounted, watchEffect} from 'vue';
import axios from 'axios';
import ProductItem from "./ProductItem.vue";
import Loader from "src/shared/ui/AppLoader/AppLoader.vue";
import {Product} from "../model/product";


let productList: Array<Product> = reactive([]);
let currentPage = ref(1);
let isFetching = ref(true);
let totalCount = ref(0);
let isLoading = ref(false);

onMounted(() => {
	document.addEventListener('scroll', scrollHandler)
})

const scrollHandler = () => {
	if (
		document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100
		&& productList.length < totalCount.value
	) {
		isFetching.value = true
	}
}

// чтобы можно было посмотреть loader
const getPhotosWithDelay = () => {
	isLoading.value = true;
	setTimeout(async () => {
		await getPhotos()
	}, 1000)
	isLoading.value = false;
}

const getPhotos = async () => {
	try {
		const response = await axios.get<Array<Product>>(`https://fakestoreapi.com/products?limit=12`)
		currentPage.value += 1
		productList.push(...response.data)
		// Представим, что бекенд возвращает 1000 возможных товаров
		totalCount.value = 1000
	} catch {
		throw new Error('Ошибочка вышла')
	} finally {
		isFetching.value = false;
	}
}

watchEffect(() => {
	if (isFetching.value) {
		getPhotosWithDelay()
	}
})

onUnmounted(() => {
	document.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
	<ul
		v-if="productList.length"
		class="list-product"
	>
		<li
			v-for="(product, index) in productList"
			:key="index"
			class="list-product__wrapper-item"
		>
			<ProductItem :product="product"/>
		</li>
	</ul>
	<Loader/>
</template>

<style lang="scss" scoped>
.list-product {
	width: 100%;
	padding: var(--padding-container);
	display: grid;
	border-radius: 5px;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-gap: 30px;

	&__wrapper-item {
		list-style: none;
	}
}

@media screen and (max-width: 1024px) {
	.list-product {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 15px;
	}
}

@media screen and (max-width: 530px) {
	.list-product {
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 10px;
	}
}
</style>