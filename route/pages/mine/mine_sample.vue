<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:-1,
			}
		},
		onLoad(options) {
			console.log(options.type)
			this.type = options.type
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
