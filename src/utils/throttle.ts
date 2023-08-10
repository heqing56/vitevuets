/**节流  传入节流函数和时间 */
function throttle(fn:Function, delay:number = 1000) {
  let canrun:boolean = true;
  const func= () => {
    if (!canrun) return;
    canrun = false;
   let timer:NodeJS.Timeout= setTimeout(() => {
      fn.apply(func, arguments);
      canrun = true;
      clearTimeout(timer)
    }, delay);
  };
  return func
}


export default throttle