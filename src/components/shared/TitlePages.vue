<template>
    <div>
        <h2 class="title">{{ title }}</h2>
        <h3 class="subtitle">{{ subtitle }}</h3>
    </div>    
</template>

<script>
export default {
    props: [
        'title',
        'subtitle'
    ]
}
</script>


<style lang="scss" scoped>
    .title {
            font-size: 1.1rem;
            color: #666;//$color-gray;
            margin: 50px 0 5px 0;
            
        }

        .title:first-child {
            margin-top:0px;
        }

        .title::before {
            display: inline-block;
            position: absolute;
            margin-top:28px;
            margin-left: -65px;
            content: "";
            border-top: 1px solid #666; //$color-gray-lighter;
            width: 45px;
            transform: translateY(-1rem);
        }

        .subtitle{
            font-size: 1.6rem;
            color: #666; //$color-gray;
            margin-bottom: 25px;
        }
</style>

