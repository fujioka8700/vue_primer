// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var vm = new Vue({
    el: '#app',
    data: {
        messagePrefix: 'Hello'
    },
    computed: {
        message: function() {
            var timestamp = Date.now()
            return this.messagePrefix + ', ' + timestamp
        }
    },
});