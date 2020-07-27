<template>
    <div>
        <input type="text" placeholder="title search" v-model="search">
    </div>
</template>

<script>
    export default{
        name: "filters",
        props: ['value'],
        computed: {
            search: {                
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }              
            }
        }
    }
</script>