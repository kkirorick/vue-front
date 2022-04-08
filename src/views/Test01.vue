<template>
	<div id="app2">
		<test-001 v-bind:num="value">
		</test-001>
		<button v-on:click="plus">click here</button>
	</div>
</template>

<script>
import Test001 from '@/components/Test001.vue'

export default {
	components: {
		"test-001": Test001
	},
	data : function(){
		return {
			value: 1
		}
	},
	methods: {
		plus:function(){
			this.value ++;
		}
	}
}
</script>