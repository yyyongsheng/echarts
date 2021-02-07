<template>
    <div>
    --
     {{ofMsg}}
    </div>
</template>

<script>
import {inject,ref} from 'vue'
    export default {
        setup(props) {
            const ofMsg = inject('proMsg',ref('none'))
                return{
                    ofMsg
                }
        }
    }
</script>

<style lang="scss" scoped>

</style>