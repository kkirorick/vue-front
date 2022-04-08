<template>
	<div id="app2">
		<dice></dice>
		<button>Random dice </button>
	</div>
</template>
<script>
import Dice from '@/components/Dice.vue'

export default {
	components: {
		"dice": Dice
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
