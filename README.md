# textlint-rule-jis-charset

Report if character out of JIS X 0213:2004 is found.

文章の中でJIS X 0213:2004（JIS2004）範囲外の文字が使われていると検出します。検出された文字は一部の電子書籍のリーディングシステムで表示ができないため注意が必要です。

参考：
* [電書協 EPUB 3 制作ガイド](http://ebpaj.jp/counsel/guide) 

Thanks:
* [Adobe-Japan1-6およびJIS2004対応の外字チェッカーを作成 @JunTajima](https://qiita.com/JunTajima/items/7878687adcc2e0685c47)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-jis-charset

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "jis-charset": true
    }
}
```

Via CLI

```
textlint --rule jis-charset README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

## License

MIT © Hiroshi Takase