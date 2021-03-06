// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

var vm = new Vue({
    el: '#app',
    data: {
        arr: ['い', 'ろ', 'は'],
        prefs: [
            { name: '大阪', speciality: 'たこ焼き' },
            { name: '京都', speciality: '八つ橋' },
            { name: '兵庫', speciality: '明石焼き' },
        ],
        n1: '',
        n2: ''
    },
    computed: {
        result: function() {
            return this.n1 * this.n2
        }
    },
    methods: {
        multiplication: function() {
            document.getElementById('result').textContent = this.n1 * this.n2
        }
    },
});