# normalize-css
normalize.cssを読み込むカスタムエレメントです

##使い方
distディレクトリにある`normalize-css.html`をhtml importします。github pagesでもホストしています。

```html
<link href="//aquei.github.io/normalize-css/dist/normalize-css.html" rel="import">
```

normalize.cssを読み込みたい場所で`<normalize-css></normalize-css>`を挿入します。

##属性

**prefix**

shadow dom内でnormalize.cssを読み込む際に、polyfill環境下でもスタイルの上書きを防ぐためにprefixにセレクタを設定できます。

```html
<normalize-css prefix=".my-component-container"></normalize-css>
```

これは
```css
.my-component-container html{foo:bar;}
```
のようになります。

##normalize.cssからの変更点
`html{}`を`prefix{}`にも適応します。
