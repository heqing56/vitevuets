import { defineStore} from 'pinia'
import { reactive,computed, toRefs } from 'vue'
import { State } from '@/types/storePinia'

export const useCompositionStore=defineStore('composition',()=>{
    const state=reactive<State>({
        num:1
    })
    const numdoubleCount=computed(()=>state.num * 2)
    const numincrement=()=>state.num++
    return {
       ...toRefs(state),
        numdoubleCount,
        numincrement
    }
})