<template>
    <div>
        <h1>{{title}}</h1>
        <ul>
            <li v-for='ninja in ninjas'>
                {{ninja}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                ninjas: ['Yupal','sweety','Navya'],
                title:'Ninja Template'
            }
        }
    }
</script>



<style scoped>

h1 {
  color : green
}
</style>
