<template>
    <div>
        <Nav />
        <div>
            <Editor />
        </div>
    </div>
</template>

<script>
import Editor from '../components/Editor.vue'
import Nav from '../layout/Nav.vue'
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    components: {
        Editor,
        Nav
    },

}
</script>

<style>
</style>