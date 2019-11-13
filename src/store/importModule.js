import Vue from 'vue'
import uuid from 'uuid/v4'
import { Validation } from 'monet'
import { sendFile } from '../importer/importWorkerHandler'

export const IMPORT_STATUS_IN_PROGRESS = 'in-progress'
export const IMPORT_STATUS_COMPLETE = 'complete'
export const IMPORT_STATUS_FAIL = 'fail'
export const IMPORT_STATUS_COMPLETE_WITH_FAILURES = 'complete with'

export default {
    namespaced: true,
    state: {
        runningImportsMap: {}
    },
    mutations: {
        setRunningImportsMap (state, newRunningImportsMap) {
            state.runningImportsMap = newRunningImportsMap
        },
        setRunningImport (state, newRunningImport) {
            Vue.set(state.runningImportsMap, newRunningImport.importUuid, newRunningImport)
        },
        removeRunningImport (state, importUuid) {
            Vue.delete(state.runningImportsMap, importUuid)
        }
    },
    actions: {
        async importFile ({ state, commit }, file) {
            let importUuid = uuid()
            let fileName = file.name
            commit('setRunningImport', { 
                importUuid: importUuid,
                name: fileName,
                status: IMPORT_STATUS_IN_PROGRESS,
                errors: []
            })
            let result = await sendFile(file)
            let resultStatus = IMPORT_STATUS_COMPLETE
            if (result.every(vali => vali.isFail())) {
                resultStatus = IMPORT_STATUS_FAIL
            } else if (result.some(vali => vali.isFail())) {
                resultStatus = IMPORT_STATUS_COMPLETE_WITH_FAILURES
            }
            commit('setRunningImport', {
                importUuid: importUuid,
                name: fileName,
                status: resultStatus,
                errors: result.filter(vali => vali.isFail()).map(vali => vali.cata(fail => fail, success => ''))
            })
        }
    },
    getters: {
        runningImports (state) {
            return Object.keys(state.runningImportsMap)
                .map(k => state.runningImportsMap[k])
        },
        hasRunningImports (state) {
            return Object.keys.length > 0
        }
    }
}