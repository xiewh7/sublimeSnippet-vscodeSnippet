# Description

a project to convert multiple sublime-snippet to vscode-snippet or be a extension of vscode js-snippet.
And you can publish your package to setup vscode extension.
一个用于转换多个sublime的代码片段为vscode代码片段的项目，也可以作为一个vscode的js代码片段插件模板。而且可以用于打包vscode的插件使用。



## Install

```
npm install
```

## Usage

put your files(.sublime-snippet) into the fileholder sublimeSnippet.
把你的文件（.sublime-snippet）放进sublimeSnippet文件夹。

you can convert sublime snippet to vscode snippet.
批量转换sublime代码片段为vscode的代码片段。
```
npm run convert
```
convert and build a vscode extension package(.vsix).
转换代码片段之后且创建一个可安装的vscode插件包vsix。

if you want to publish your vscode extension, you should change the params of the package.json(publisher, repository, version and so on)
如果要发布在市场，可以将package.json的参数修改一下。

## Example

text.sublime-snippet
```
<snippet>
   <content><![CDATA[
=================================
First Name: ${1:Guillermo}
Second Name: ${2:López}
Address: ${3:Main Street 1234}
User name: $1
Environment Variable : ${4:$TM_FILEPATH }  #可以设置默认占位符为环境变量
Test: ${5:Nested ${6:Placeholder}}
=================================
]]></content>
    <tabTrigger>hello</tabTrigger>
    <scope>source.python</scope>
</snippet>
```

snippets.code-snippets(after converted 转换后)
```
{
	"hello": {
		"prefix": "hello",
		"body": "=================================\r\nFirst Name: ${1:Guillermo}\r\nSecond Name: ${2:López}\r\nAddress: ${3:Main Street 1234}\r\nUser name: $1\r\nEnvironment Variable : ${4:$TM_FILEPATH }  #可以设置默认占位符为环境变量\r\nTest: ${5:Nested ${6:Placeholder}}\r\n=================================$0"
	}
}
```

## License
MIT © Richard McRichface




