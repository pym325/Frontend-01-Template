# 总结

- [Unicode](http://www.fileformat.info/info/unicode/)
- [Unicode-home](https://home.unicode.org/)
- unicode 现在用4个16进制来表示(现在弄emoji)可能可以到5个16进制
- CJK(Chinese Japan Korean)
- BMP范围(U+0000-U+FFFF) 基本多语言平面
- InputElement
	- WhiteSpace
		- \<TAB> \t -> 对应码点 0x0009 \u0009 \u开头相当于是等价的转义写法，如果知道码点
		- \<VT> \v 11
		- \<FF>  From Feed \u000C
		- \<SP> 普通空格 32
		- \<NBSP> &nbsp No-Break Space \u00A0 放在单词间 换行的时候两个不会被分开
		- \<ZWNBSP> zero width nbsp 零宽空格 \uFEFF
		- \<USP> [http://www.fileformat.info/info/unicode/category/Zs/list.htm](http://www.fileformat.info/info/unicode/category/Zs/list.htm) 包含前5个的部分，前5个拿出来单独讲
	- LineTerminator
		- \<LF>  Line Feed \u000A \n windows下会有\r\n 
		- \<CR> Carriage Return \u000D 回车
		- \<LS> Line Sparator \u2028 (不建议使用)
		- \<PS> Paragraph Separator \u2029 (不建议使用)
	- Comment
	- Token
		- Punctuator
		- IdentifierName
			- Keywords
			- Identifier 标识符
			- Future reserve keywords: enum 
		- Literal 直接量
			- Number IEEE 754 Double Float
				- 二进制 0b / 八进制 0o / 十六进制 0x
				- 比较浮点数是否相等 eps Number.EPSILON
				- 如何快速看一个数字的二进制: `(97).toString(2)`
			- String
				- Character
				- Code Point
				- Encoding
					- unicode的编码 UTF Unicode Transformation Format
			- Boolean
			- Undefined
			- Null
- 属性名可以是keywords，变量名不可以
- undefined 是全局的变量，不算keyword，改不掉，但是你在函数里可以改 
```js
var undefined = 5
console.log(undefined); // undefined
function a(){
	var undefined = 5;
	console.log(undefined); // 5
}
```
- `0.toString()`是不行的，要 `0 .toString()` 浮点数的原因
- UTF-8 针对Unicode的一种可变长度字符编码
- String (ASCII绝大部分标准都兼容，码点都是一样的)
	- ASCII
	- Unicode
	- UCS U+0000 - U+FFFF
	- GB 国标 ASCII + 大部分中文
		- GB2312 
		- GBK(GB13000)
		- GB18030
	- ISO-8859 一堆欧洲国家的字符
	- BIG5 ASCII + 繁体中文
- 上面这些只是具体标准，怎么存这些东西还要 Encoding，比如unicode 就是可以用 utf-8 编码
- Escape Character 转义字符 可以写在 string 里
- Windows/DOS系统：采用CR/LF表示下一行；
- Unix/Linux系统：采用LF表示下一行；
- Mac OS系统：采用CR表示下一行；
- Mac OS X系统：采用LF表示下一行（Mac OS X已经改成和Unix/Linux一样使用LF）
- [浮点数文章](https://github.com/camsong/blog/issues/9)
- [浮点数文章2](https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/)
- [在线unicode 转 UTF-8](https://onlineunicodetools.com/convert-unicode-to-utf8)