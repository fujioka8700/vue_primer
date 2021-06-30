// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var counterButton = Vue.extend({
    template: '<button>追加</button>'
})

var vm = new Vue({
    el: '#fruits-counter',
    components: {
        'counter-button': counterButton
    },
    data: {
        fruits: [
            { name: '梨' },
            { name: 'イチゴ' }
        ]
    }
});