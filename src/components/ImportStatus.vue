<template>
    <div 
        class="import-message-list" 
        v-if="hasRunningImports">
        <div 
            class="import-message"
            v-bind:class="{ 
                'import-message--in-progress': imp.status === statusInProgress, 
                'import-message--complete': imp.status === statusComplete,
                'import-message--fail': imp.status === statusFail,
                'import-message--partial': imp.status === statusCompleteWithFailures
            }"
            v-for="imp in runningImports" 
            v-bind:key="imp.importUuid">
            <div class="import-message__remove">
                <button 
                    class="import-message__remove__action" 
                    v-on:click="removeImportMessage(imp.importUuid)">
                    X
                </button>
            </div>
            <div class="import-message__details">
                <span
                    class="import-message__status import-message--in-progress__status"
                    v-if="imp.status === statusInProgress">
                    In Progress
                </span>
                <span
                    class="import-message__status import-message--complete__status"
                    v-if="imp.status === statusComplete">
                    Complete
                </span>
                <span
                    class="import-message__status import-message--fail__status"
                    v-if="imp.status === statusFail">
                    Failed
                </span>
                <span
                    class="import-message__status import-message--partial__status"
                    v-if="imp.status === statusCompleteWithFailures">
                    Partially Complete
                </span>
                <span class="import-message__name">
                    {{ imp.name }}
                </span>
                <a
                    class="import-message__info"
                    href="#"
                    v-on:click.prevent="toggleMoreInfo(imp)"
                    v-if="imp.status === statusFail || imp.status === statusCompleteWithFailures">
                    info
                </a>
            </div>
        </div>
        <section
            class="hmap-modal hmap-modal--import-status"
            v-if="messageInModal != null">
            <div class="hmap-modal__header">
                <h1 class="hmap-modal__title">
                    {{ messageInModal.name }} Import Errors
                </h1>
                <div
                    class="hmap-modal__close button button--close"
                    v-on:click="toggleMoreInfo(null)">
                    <p>X</p>
                </div>
            </div>
            <div class="hmap-modal__content">
                <div 
                    class="hmap-modal--import-status__error-message"
                    v-for="(error, idx) in messageInModal.errors"
                    v-bind:key="`error-${idx}`">
                    {{ error }}
                </div>
            </div>
        </section>
        <div 
            class="hmap-modal-backdrop" 
            v-if="messageInModal != null" 
            v-on:click="toggleMoreInfo(null)">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
    IMPORT_STATUS_IN_PROGRESS,
    IMPORT_STATUS_COMPLETE,
    IMPORT_STATUS_FAIL,
    IMPORT_STATUS_COMPLETE_WITH_FAILURES
} from '../store/importModule'

export default {
    name: 'Import-Status',
    data () {
        return {
            messageInModal: null
        }
    },
    computed: {
        statusInProgress () {
            return IMPORT_STATUS_IN_PROGRESS
        },
        statusComplete () {
            return IMPORT_STATUS_COMPLETE
        },
        statusFail () {
            return IMPORT_STATUS_FAIL
        },
        statusCompleteWithFailures () {
            return IMPORT_STATUS_COMPLETE_WITH_FAILURES
        },
        ...mapGetters('imports',[
            'runningImports',
            'hasRunningImports'
        ])
    },
    methods: {
        keypressEventListener (ev) {
            if (ev.key === 'Escape') {
                this.messageInModal = null
            }
        },

        removeImportMessage (importUuid) {
            this.$store.commit('imports/removeRunningImport', importUuid)
        },

        toggleMoreInfo (message) {
            this.messageInModal = message

            if (this.messageInModal != null) {
                document.addEventListener('keydown', this.keypressEventListener)
            } else {
                document.removeEventListener('keydown', this.keypressEventListener)
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../scss/variables.scss";
    @import "../scss/mixins/modal.scss";

    .import-message-list {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .import-message {
        padding: .25rem 1rem 0;
        display: flex;
        flex-direction: column;

        $this: &;

        &--fail {
            border: 1px solid $color-red-dark;
            border-radius: 10px;
            background-color: $color-red-light;
            color: $color-red-dark;

            #{$this}__remove {
                &__action {
                    color: $color-red-dark;

                    &:hover {
                        color: $color-white;
                        background-color: $color-red-dark;
                    }
                }
            }

            #{$this}__info {
                color: $color-red-dark;
            }
        }

        &--complete {
            border: 1px solid $color-green-darker;
            border-radius: 10px;
            background-color: $color-green-light;
            color: $color-green-darker;

            #{$this}__remove {
                &__action {
                    color: $color-green-darker;

                    &:hover {
                        color: $color-white;
                        background-color: $color-green-darker;
                    }
                }
            }

            #{$this}__info {
                color: $color-green-darker;
            }
        }

        &--partial {
            border: 1px solid $color-yellow-dark;
            border-radius: 10px;
            background-color: $color-yellow-light;
            color: $color-yellow-dark;

            #{$this}__remove {
                &__action {
                    color: $color-yellow-dark;

                    &:hover {
                        color: $color-white;
                        background-color: $color-yellow-dark;
                    }
                }
            }

            #{$this}__info {
                color: $color-yellow-dark;
            }
        }

        &--in-progress {
            border: 1px solid $color-blue-darker;
            border-radius: 10px;
            background-color: $color-blue-light;
            color: $color-blue-darker;

            #{$this}__remove {
                &__action {
                    color: $color-blue-darker;

                    &:hover {
                        color: $color-white;
                        background-color: $color-blue-darker;
                    }
                }
            }

            #{$this}__info {
                color: $color-blue-darker;
            }
        }

        &__status {
            font-weight: 600;

            &:after {
                content: ':';
                margin-right: 1ch;
            }
        }

        &__name {
            margin-right: 1ch;
        }

        &__remove {
            text-align: right;
            &__action {
                background: transparent;
                border: none;
                font-weight: 600;
                padding: .25rem .5rem;
                border-radius: 5px;
                cursor: pointer;
                user-select: none;
            }
        }

        &__info {
            user-select: none;
        }

        &__details {
            padding: 0 2rem 1rem 1rem;
            position: relative;
            top: -8px;
        }
    }

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
            flex-direction: column;
        }
    }

    .hmap-modal-backdrop {
        @include modalBackdrop();
    }
</style>
