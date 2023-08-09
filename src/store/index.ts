import { createStore } from "vuex";
const obj:Record<string, any> = import.meta.globEager("./modules/*.ts"); // 查找文件
const modules = Object.keys(obj).reduce((modules, modulePath:string) => {
  const moduleName:string = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
  modules={
    [moduleName]:obj[modulePath].default
  } 
  return modules;
}, {});
const store = createStore({
  modules: {
    ...modules,
  },
});

export default store;
