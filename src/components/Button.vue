<template>
    <button :style='{ backgroundImage: "url(" + bgImg + ")", }'>
        <div class="info">
            <h4>{{ type }}</h4>
            <h5>{{ title }}</h5>
        </div>
    </button>
</template>

<script>
export default {
    props: [
        'title',
        'type',
        'bgImg'
    ]
}
</script>

<style lang="scss" scoped>

</style>


