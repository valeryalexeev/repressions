<template>
    <div class="pr-links">
        <div class="pr-links__item" v-for="(i, index) in items" :key="index">
            <a :href="i.url" target="_blank">{{ i.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: require('../../../data-links.json')
        }
    },
}
</script>