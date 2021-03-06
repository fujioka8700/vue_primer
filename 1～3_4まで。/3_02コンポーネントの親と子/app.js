// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// ベースのVueコンストラクタを継承した、サブコンストラクタを作成
// Vue.extend()でコンポーネントを定義
var FruitsListTitle = Vue.extend({
    template: '<h1>フルーツ一覧</h1>'
})

// 定義したものを直接特定の要素にマウント
new FruitsListTitle().$mount('#fruits-list')

// サブクラスコンストラクタを渡して、コンポーネントを登録することも可能
// カスタム要素で使用可能
Vue.component('fruits-list-title', FruitsListTitle)

new Vue({
    el: '#app'
})