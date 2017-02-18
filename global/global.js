/**
 * Created by apple on 17/2/18.
 */

/**
 * 1. 内置模块 指定名字
 * 2. 文件模块 路径
 * 3. 第三方模块 指定名字
 */


//  获取模块的文件的绝对路径

console.log(__filename);

//  获取 当前模块文件的所在目录的绝对路径
console.log(__dirname);

console.log(global);

/**
 *  1. global的属性可以不用引用，也不用声明，就可以直接使用
 *  2. 在node 中模块中能直接用两种
 *      1. 是全局对象下面的属性
 *      2. 初始化模块时传入的参数
 *
 *
 *
 **/