/**防抖  传入防抖函数和时间 */
function debounce(fn: Function, delay: number = 300) {
  let timer: NodeJS.Timeout = null;
  const func = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(func, arguments);
    }, delay);
  };
  return func;
}
export default debounce;
