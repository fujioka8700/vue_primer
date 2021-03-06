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
        numberWithDelimiter: function(value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function() {
            return this.items.reduce(function(sum, item){
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithPrice: function() {
            // 算出プロパティに依存した、算出プロパティも定義できる
            return Math.floor(this.totalPrice * 1.10)
        },
        someFunc: function() {
            // thisによる参照
            return this.items[0].price*3
        },
        canBuy: function() {
            var isBuy = this.totalPrice >= 1000 // 1000円以上から、購入可能にする
            console.log(isBuy);
            return isBuy
        },
        errorMessageClass: function() {
            return {
                error: !this.canBuy
            }
        },
        errorMessageStyle: function() {
            // canBuyが偽の時に、赤枠と緑色に表示する
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'green'
            }
        }
    },
});

var vm_1 = new Vue({
    el: '#b-button',
    data: {
        loggedInButton: 'ログイン済のため購入できます',
        canBuy: false
    },
});

// vm.$watch(function(){
//     return this.items[0].quantity
// },function(quantity){
//     console.log('個数:' + quantity)
// })

// vm.$watch(function(quantity){
//     console.log('個数:' + quantity)
// })