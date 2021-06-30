// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var FruitsListTitle = Vue.extend({
    template: '<h1>フルーツ一覧</h1>'
})

new FruitsListTitle().$mount('#fruits-list')