<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><title>{{title}}</title><g fill="#111111"><rect fill="#111111" width="16" height="3"/> <rect y="6" width="16" height="3"/> <rect y="12" fill="#111111" width="16" height="3"/></g></svg></template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "menu 6"
		}
	}
}
</script>