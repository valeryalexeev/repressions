<template>
    <div class="pr-episodes">
        <div class="row">
            <div class="pr-episodes__col" v-for="(i, index) in items" :key="index">
                <div class="pr-episodes__item">
                    <div class="pr-episodes__item__title">{{ i.title }}</div>
                    <div class="pr-episodes__item__text">{{ i.text }}</div>
                    <a target="_blank" :href="i.url" class="pr-episodes__item__link">Узнать подробнее</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: require('../../../data-episodes.json')
        }
    },
}
</script>