// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// 子コンポーネントのカウンターボタン
var counterButton = Vue.extend({
    template: '<span>{{ counter }}個<button @click="addToCart">追加</button></span>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        addToCart: function() {
            this.counter++
            this.$emit('increment') // incrementカスタムイベントの発火
        }
    }
})

var vm = new Vue({
    el: '#fruits-counter',
    components: {
        'counter-button': counterButton
    },
    data: {
        total: 0, // カート内の合計商品数
        fruits: [
            { name: '梨' },
            { name: 'イチゴ' }
        ]
    },
    methods: {
        incrementCartStatus: function() {
            this.total++
        }
    }
});