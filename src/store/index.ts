import { createStore } from "vuex";
const obj: Record<string, Function> = import.meta.glob("./modules/*.ts"); // 查找文件
const arr = Object.keys(obj);
let modules = {};
for (let modulePath of arr) {
  const moduleName: string = modulePath.replace(
    /^\.\/modules\/(.*)\.\w+$/,
    "$1"
  );
  const val = await obj[modulePath]();
  modules = {
    [moduleName]: val.default,
  };
}
const store = createStore({
  modules: {
    ...modules,
  },
});
export default store;
