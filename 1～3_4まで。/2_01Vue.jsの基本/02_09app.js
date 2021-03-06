// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0 // 数量
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items,
    },
    filters: {
        // 3桁ごとにカンマ
        numberWithDelimiter: function(value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        // 小計
        totalPrice: function() {
            return this.items.reduce(function(sum, item){
                // console.log(item.price * item.quantity);
                return sum + (item.price * item.quantity)
            }, 0)
        },
        // 合計(税込)
        totalPriceWithTax: function() {
            return Math.floor(this.totalPrice * 1.1);
        },
        // 合計金額が1000円未満なら、注意を表示
        canBuy: function(){
            return this.totalPrice >= 1000;
        },
        // 合計金額が1000円未満なら、枠を表示
        errorMessageStyle: function() {
            console.log(this.canBuy);
            return {
                color: this.canBuy ? '' : 'red',
                border: this.canBuy ? '' : '1px solid black'
            }
        }
    },
    methods: {
        doBuy: function() {
            // 本来はここで、サーバーと通信を行う
            alert(this.totalPriceWithTax + '円のお買い上げ')
            this.items.forEach(function(item) {
                item.quantity = 0
            })
        }
    },
});