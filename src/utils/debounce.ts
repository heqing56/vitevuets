
/**防抖  传入防抖函数和时间 */
function debounce(fn:Function, delay:number){
	let timer:any = null;
	return function(){
		clearTimeout(timer);
		timer = setTimeout(()=> {
			fn();
		}, delay)
	}
}
export default debounce
