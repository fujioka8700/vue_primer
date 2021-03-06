// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

Vue.component('fruits-list-title', {
    template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list-description', {
    template: '<p>季節の代表的なフルーツの一覧です</p>'
})

Vue.component('fruits-list-table', {
    template: `
    <table>
        <tr>
            <th>季節</th>
            <th>フルーツ</th>
        </tr>
        <tr>
            <td>春</td>
            <td>いちご</td>
        </tr>
        <tr>
            <td>夏</td>
            <td>スイカ</td>
        </tr>
        <tr>
            <td>秋</td>
            <td>ぶどう</td>
        </tr>
        <tr>
            <td>冬</td>
            <td>みかん</td>
        </tr>
    </table>
    `
})

new Vue({
    el: '#fruits-list'
})