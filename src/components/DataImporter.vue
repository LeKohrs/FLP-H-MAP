<template>
    <div class="data-importer">
        <button class="button button--import-data" v-on:click="toggleModal">
            <p>Import</p>
        </button>
        <section class="hmap-modal hmap-modal--data-importer" v-if="modalOpen">
            <div class="hmap-modal__header">
                <h1 class="hmap-modal__title">
                    Import Clients
                </h1>
                <div class="hmap-modal__close button button--close" v-on:click="toggleModal">
                    <p>X</p>
                </div>
            </div>
            <div class="hmap-modal__content">
                <FileInput v-bind:on-file="beginImport"/>
            </div>
        </section>
        <div class="hmap-modal-backdrop" v-if="modalOpen" v-on:click="toggleModal"></div>
    </div>
</template>


<script>
import uuid from 'uuid/v4'
import { Validation } from 'monet'
import FileInput from './FileInput'

export default {
    name: 'Data-Importer',
    components: {
        FileInput
    },
    data () {
        return {
            modalOpen: false
        }
    },
    methods: {
        keypressEventListener (ev) {
            if (ev.key === 'Escape') {
                this.modalOpen = false
            }
        },
        toggleModal () {
            this.modalOpen = !this.modalOpen

            if (this.modalOpen) {
                document.addEventListener('keydown', this.keypressEventListener)
            } else {
                document.removeEventListener('keydown', this.keypressEventListener)
            }
        },
        beginImport (ev) {
            let files = Array.from(ev.target.files)
            let safeThis = this

            files.forEach((file) => {
                this.$store.dispatch('imports/importFile', file)
            })

            this.toggleModal()
        }
    }
}
</script>

<style lang="scss">
    @import "../scss/variables.scss";
    @import "../scss/mixins/modal.scss";

    .data-importer {
        margin-right: $button-spacing;

        .hmap-modal {
            @include modal(
                $include-header-border: false,
                $include-footer-border: false
            );

            &__header {
                display: flex;
                justify-content: space-between;
            }

            &__title {
                font-size: 1.5rem;
            }

            &__content {
                display: flex;
                justify-content: space-around;
            }
        }

        .hmap-modal-backdrop {
            @include modalBackdrop();
        }
    }
</style>
