npm init
npm i vue nuxt
npm i vuetify @nuxtjs/vuetify
npm i @nuxtjs/axios axios
npm i -D eslint eslint-plugin-vue
npm i lodash.throttle
npm i @nuxtjs/moment
npm i express
- aws에서 nuxt start를 못하는 경우가 있어 사용
npm i cross-env
- 리눅스에서는 되는데 윈도우에서 node server가 안되서 사용

---

front에 pages 폴더 생성
- index.vue 파일 추가

package.json 수정
- `"stript": {"dev": "nuxt"}`

front에 layouts 폴더 생성
- default.vue 파일 추가

nuxt.config.js 파일 추가

analyze 설정
- nuxt.config.js > build > analyze : true(배포 전), false(개발 시)