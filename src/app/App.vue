<script setup lang="ts">
import Navbar from "src/widgets/Navbar/ui/NavBar.vue";
import List from "src/widgets/ProductList/ui/ProductList.vue";
import AppFooter from "src/widgets/AppFooter/AppFooter.vue";

</script>

<template>
	<Navbar/>
	<main class="main-content">
		<List/>
	</main>
	<AppFooter/>
</template>

<style lang="scss" scoped>
.main-content {
	margin-top: var(--height-navbar);
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - var(--height-navbar) - var(--height-footer));
	flex-direction: column;
}
</style>