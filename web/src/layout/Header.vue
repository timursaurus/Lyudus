<template>
    <header>
        <p>{{ time }}</p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            time: null,
        }
    },
    mounted() {
        this.newDate()
    },
    methods: {
        newDate() {
            let time = new Date().toLocaleTimeString()
            this.time = time
        }
    }
}
</script>



<style>
</style>