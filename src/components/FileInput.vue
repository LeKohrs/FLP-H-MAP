<template functional>
    <div class="file-input button button--file-input">
        <p class="file-input__action">Select File(s)</p>
        <input class="file-input__input" type="file" multiple v-on:change="props.onFile($event)">
    </div>
</template>

<style lang="scss">
    .file-input {
        position: relative;
        overflow: hidden;
        text-align: center;
        margin: 0;
        width:20rem;

        &__input {
            opacity: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            cursor: pointer;
        }
    }
</style>
