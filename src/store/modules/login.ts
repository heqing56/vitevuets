import {setStore,getStore} from '@/utils/store'
import { User } from '@/types/store';

const login = {
  // namespaced: true,
  state: ():User => ({
    token: getStore({name:'token'}) || "",
    userInfo: getStore({name:'userInfo'})||{},
    systemData: 10,
    userData: 20,
  }),
  mutations: {
    setToken(state:User, token:string) {
      state.token = token;
      setStore({name:'token',content:token})
    },
    setUserInfo(state:User, value:object) {
      state.userInfo = value;
      setStore({name:'userInfo',content:value})
    },
    setSystemData(state:User, value:number) {
      state.systemData = value;
      
    },
    setUserData(state:User, value:number) {
      state.userData = value;
    },
  },
  actions: {},
};

export default login;
