<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-container">
                <slot name="img"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: [
        'imgBig'
    ]
}
</script>

<style lang="scss">
    
    .modal-mask {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: block;
        transition: opacity .3s ease;
    }

    .modal-container {
        width: 70%;
        max-width:800px;
        height: 90%;
        position: relative;
        display:block;
        overflow-y: scroll;
        margin: 30px auto;
        background-color: #fff;
        border:5px solid #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;

        
    }

    .img-modal {
        display: block;
        width:100%;
        height:auto;
    }
    

    .modal-close-button {
        position:fixed;
        padding:10px 12px;
        font-size: 1.3rem;
        border-radius: 50%;
        z-index:9;

    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>


