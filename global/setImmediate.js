/**
 * Created by apple on 17/2/18.
 */
/**
 * 在下一个事件环中执行此函数
 */

// 效率高 直接执行
setImmediate(() => {
    console.log('====')
});

// 把这个函数放在当前函数的末尾
process.nextTick(() => {
   console.log('ccc');
});