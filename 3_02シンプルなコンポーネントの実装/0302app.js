// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

Vue.component('fruits-list-title', {
    template: '<h1>フルーツ一覧</h1>'
})

new Vue({
    el: '#fruits-list'
})