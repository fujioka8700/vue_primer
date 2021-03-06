// ロードされ、Vueがグローバル変数として、定義されているか確認
console.assert(typeof Vue !== 'undefined');

Vue.component('item-desc', {
    props: {
        itemName: {
            type: String
        }
    },
    template: '<p>{{ itemName }}は便利です</p>'
})

var vm = new Vue({
    el: '#app',
    data: {
        myItem: 'pen'
    }
});

////

Vue.component('fruits-item-name', {
    props: {
        fruitsItem: {
            type: Object,
            required: true
        }
    },
    template: '<li>{{ fruitsItem.name }}</li>'
})

var vm2 = new Vue({
    el: '#fruits-component',
    data: {
        fruitsItems: [
            { name: '梨' },
            { name: 'イチゴ' }
        ]
    }
})