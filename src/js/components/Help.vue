<template>
    <div class="pr-help">
        <div class="row">
            <div class="pr-help__col" v-for="(i, index) in items" :key="index">
                <div class="pr-help__item">
                    <div class="pr-help__item__title">{{ i.title }}</div>
                    <div class="pr-help__item__text">{{ i.text }}</div>
                    <a target="_blank" :href="i.url" class="pr-help__item__link"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            default: 'free'
        }
    }, 
    data() {
        return {
            items: require('../../../data-help.json')[this.type]
        }
    },
}
</script>