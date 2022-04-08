<template>
	<div id="app3">
		<test-002>
		</test-002>
	</div>
</template>

<script>
import Test002 from '@/components/Test002.vue'

export default {
	components: {
		"test-002": Test002
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