// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

// 描画関数
Vue.component('input-date-with-today', {
    render: function (createElement) {
        return createElement(
            'input',
            {
                attrs: {
                    type: 'date',
                    value: new Date().toISOString().substring(0,10)
                }
            }
        )
    }
})

// コンポーネントのデータ
Vue.component('simple-counter', {
    template: `
    <div>
        <h1>フルーツ一覧</h1>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">
                {{fruit}}
            </li>
        </ul>
    </div>
    `,
    data: function() {
        return {
            fruits: ['りんご', 'みかん']
        }
    }
})

var vm = new Vue({
    el: '#app'
});