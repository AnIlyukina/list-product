import {computed, defineAsyncComponent} from "vue";

export function getComponentSvg (iconName: string | undefined) {
	return computed(() => {
		if (!iconName) {
			return;
		}
		return defineAsyncComponent(() => import(`src/app/styles/assets/icons/${iconName}.svg`));
	})
}