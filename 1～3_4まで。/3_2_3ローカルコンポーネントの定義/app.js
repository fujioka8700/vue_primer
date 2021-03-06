// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// ローカルコンポーネントの定義
var vm = new Vue({
    el: '#fruits-list',
    components: {
        'fruits-list-title': {
            template: '<h1>フルーツ一覧</h1>'
        }
    }
});

var AnimalsListTitle = Vue.extend({
    template: '<h1>動物一覧</h1>'
})

var vm2 = new Vue({
    el: '#animal-list',
    components: {
        // コンストラクタベースのテンプレートも指定可能
        'animals-list-title': AnimalsListTitle
    }
})

Vue.component('vegetables-list-title', {
    template: '#vegetables-list-title'
})

var vm3 = new Vue({
    el: '#vegetables-list'
})