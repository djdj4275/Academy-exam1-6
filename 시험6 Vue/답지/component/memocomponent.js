Vue.component('memo-component',{
    props : ['search'], // 삭제할때 자신이 어떤 위치 데이터를 가지고 있는지 알려주는 역할
    template : 
    `
    <div class="memo">
        <h3>
            <slot name="title"></slot>
            <button v-on:click="deleteMemo">X</button>
        </h3>
        <slot name="memo"></slot>
        <hr>
        <p>{{fomatTime}}</p>
    </div>
    `,
    data : function() {
        return {
            time : new Date()
        }
    },
    methods : {
        deleteMemo : function() {
            this.$emit('delete',this.search) //자신이 가진 search라는 속성값을 들고서 사용자지정 함수 delete 실행
        }
    },
    computed : {
        fomatTime : function() { /* 원래 년월일을 들고오는건 숫자열이지만 뒤에 문자를 붙이면 문자열로 자동변환 */
            return this.time.getFullYear()+'년 '+(this.time.getMonth()+1)+"월 "+this.time.getDate()+"일"
        }
    }
})