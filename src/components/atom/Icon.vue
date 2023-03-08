<script lang="ts" setup>

        type props={
            icon:string,
            color:string,
        };
    defineProps<props>()
</script>
<template>
   <i :class="`bi bi-${icon} text-${color}`"></i>
</template>
<style scoped>
</style>