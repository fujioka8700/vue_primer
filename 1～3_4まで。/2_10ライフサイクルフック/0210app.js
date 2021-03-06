// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var vm = new Vue({
    el: '#app',
    data: {
        count: 0,
        timerId: null
    },
    created: function() {
        console.log('created')
        var that = this

        // データを参照できる 0
        console.log(this.count)

        // DOM要素が紐づいていないので、undifined
        console.log(this.$el)

        // タイマー処理をする
        setInterval(function() {
            that.count += 1
        }, 1000)
    },
    mounted: function() {
        console.log('mounted')

        // DOM要素が紐づいている
        console.log(this.$el);
    },
    beforeDestroy: function() {
        console.log('beforeDestroy')

        // タイマーの後始末を行う
        clearInterval(this.timerId)
    },
});