<script setup lang="ts">
import Header from "./components/NavBar.vue";
import List from "./components/ListProduct.vue";

</script>

<template>
	<Header/>
	<main class="main-content">
		<List/>
	</main>
</template>

<style lang="scss" scoped>
.main-content {
	margin-top: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 120px);
	flex-direction: column;
}
</style>