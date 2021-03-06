// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// 子コンポーネントのカウンターボタン
var counterButton = Vue.extend({
    // 親子間のやりとりには props とイベントを使うこと。
    template: '<p>{{ this.$parent.fruits[0].name }}</p>',
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

var parent = new Vue({
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
    },
});

var child = parent.$refs.counter
console.log(child);