<script lang="ts" setup>
import type { Method } from '@babel/types';

        type props={
            id:string,
            placeholder:string,
            label:string,
            type?:string,
            value?:string,
            Accept?:string,
            onChange?:any,
            VModel?:string,
        };
    defineProps<props>()
</script>
<template>
    <label :for="label" class="text-white">{{label}}</label>
 <input :type="type" @change="onChange" :placeholder="placeholder" :id="id" :value="value" :accept="Accept"/>
</template>
<style scoped>
</style>