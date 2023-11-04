<script setup lang="ts">
import {reactive, ref, onMounted, onUnmounted, watchEffect} from 'vue';
import axios from 'axios';
import ItemProduct from "./ItemProduct.vue";
import {Product} from "../types/types";
import Loader from "./Loader.vue";

let productList: Array<Product> = reactive([]);
let currentPage = ref(1);
let isFetching = ref(true);
let totalCount = ref(0);
let isLoading = ref(false);

onMounted(() => {
	document.addEventListener('scroll', scrollHandler)
})

const scrollHandler = (e: Event) => {
	if (
		//@ts-ignore
		e.target.documentElement.scrollHeight - (e.target?.documentElement.scrollTop + window.innerHeight) < 100
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
	}, 2000)
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
			<item-product :product="product"/>
		</li>
	</ul>
	<Loader/>
</template>

<style lang="scss" scoped>
.list-product {
	padding: var(--padding-container-l);
	display: grid;
	border-radius: 5px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 30px;

	&__wrapper-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
		list-style: none;
		padding: 20px;
		border-radius: 10px;
		background-color: var(--bg-color-card);
		color: var(--primary-color);
		border: 1px solid rgba(0, 0, 0, 0.1)
	}
}
</style>