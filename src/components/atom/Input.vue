<script lang="ts" setup>
import type { Method } from '@babel/types';

        type props={
            id:string,
            placeholder:string,
            label:string,
            type?:string,
            onChange?:any,
        };
    defineProps<props>()
</script>
<template>
    <label :for="label" class="text-white">{{label}}</label>
 <input :type="type" @change="onChange" :placeholder="placeholder" :id="id"/>
</template>
<style scoped>
</style>