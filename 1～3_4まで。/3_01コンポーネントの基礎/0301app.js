// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// コンポーネント
Vue.component('list-item', {
    data: function() {
        return {
            contents: 'bar'
        }
    },
    // Vueコンポーネントの中で、テンプレート構文も使用可能
    template: '<li>{{ contents }}</li>'
})

new Vue({
    el: '#example'
})

var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello'
    }
});