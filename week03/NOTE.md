# 总结

### Statement

- 简单语句
	- ExpressionStatement e.g. `a = 1 + 2;`
	- EmptyStatement e.g. `;`
	- DebuggerStatement e.g. `debugger;`
	- ThrowStatement e.g. `throw a;`
	- ContinueStatement e.g. `continue label1;`
	- BreakStatement e.g. `break label2;`
	- ReturnStatement e.g. `return 1 + 2;`

- 组合语句
	- BlockStatement(执行碰到非normal的就结束)
		- \[\[type]]:normal
		- \[\[value]]: --
		- \[\[target]]: -- 
	- IfStatement
	- SwitchStatement
	- IterationStatement
		- Grammar
			- while ( ) { }
			- do { } while( )
			- for ( ; ; ) { }
			- for ( in ) { }
			- for ( of ) { }
			- for await ( of ) {}
	- WithStatement
	- LabelledStatement
	- TryStatement(try 必须有花括号还要有 catch)
		- \[\[type]]: return
		- \[\[value]]: --
		- \[\[target]]: label  
- 声明
	- FunctionDeclaration
	- GeneratorDeclaration
	- AsyncFunctionDeclaration
	- AsyncGeneratorDeclaration
	- VariableStatement (var)
	- ClassDeclaration
	- LexicalDeclaration (let/const)

- Completioin Record（语句完成后状态的描述） 
	- [[type]]: normal || break || continue || return || throw
	- [[value]]: Types(js中的类型)
	- [[target]]: label

### Object
- 三要素
	- State
	- Behavior
	- Identifier(唯一性)