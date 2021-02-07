<template>
<div>   
        <div>
          {{number}}
    </div>
    <div class="test1"   @click="childF">
            ++
    </div>


      <vText2  > </vText2>
</div>
    
    
</template>

<script>
import {computed} from 'vue'
import Test2 from './test2.vue';

    export default {

        components:{
            vText2:Test2
        },
        props:{
            msg:Number
        }

        ,
        setup(props,{emit}) {
            const number=computed(()=>{
                return props.msg
            })

            function childF(){
                   emit('my-emit','我是子组件值') 
            }

            return{
                number,
                childF
            }
        }
    }
</script>

<style lang="scss" scoped>
.test1{
    margin-bottom: 50px;
}
</style>