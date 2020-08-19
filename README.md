# \[NodeJS\] Unit Convert

[`hugoalh-studio/NodeJS.UnitConvert`](https://github.com/hugoalh-studio/NodeJS.UnitConvert)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/NodeJS.UnitConvert/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/NodeJS.UnitConvert?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/NodeJS.UnitConvert?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/nodejs.unitconvert)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/NodeJS.UnitConvert.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.UnitConvert/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/NodeJS.UnitConvert.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.UnitConvert/context:javascript)

| **[Release](https://github.com/hugoalh-studio/NodeJS.UnitConvert/releases)** ![](https://img.shields.io/github/downloads/hugoalh-studio/NodeJS.UnitConvert/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh-studio/NodeJS.UnitConvert/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh-studio/NodeJS.UnitConvert/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.UnitConvert?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.UnitConvert?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20))<br />[![NPM](https://img.shields.io/npm/v/@hugoalh/unit-convert?logo=npm&logoColor=ffffff&style=flat-square)](https://www.npmjs.com/package/@hugoalh/unit-convert) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/NodeJS.UnitConvert?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to convert unit.

- Angle
- [ ] Colour
- [ ] Length
- Pressure
- Temperature
- [ ] Weight

[Click here to view the official documentation online.](https://github.com/hugoalh-studio/NodeJS.UnitConvert/wiki)

## 📄 Documentation (Excerpt)

### Getting Started

NodeJS (v10+) & NPM (v6+):

```powershell
> npm install @hugoalh/unit-convert
```

### API

- ```javascript
  new Angle(inputValue, inputUnit?)
    .to(outputUnit?)
  ```
- ```javascript
  new Colour(inputValue, inputUnit?)
    .to(outputUnit?)
  ```
- ```javascript
  new Length(inputValue, inputUnit?)
    .to(outputUnit?)
  ```
- ```javascript
  new Pressure(inputValue, inputUnit?)
    .to(outputUnit?)
  ```
- ```javascript
  new Temperature(inputValue, inputUnit?)
    .to(outputUnit?)
  ```
- ```javascript
  new Weight(inputValue, inputUnit?)
    .to(outputUnit?)
  ```

### Example

```javascript
const unitConvert = require("@hugoalh/unit-convert");

console.log(new Temperature(25, "C").to("K"));// 298.15
```
