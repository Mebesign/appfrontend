<template>
    <ul>
        <li>
            <a :href="login">Login</a>
        </li>
        <li>
            <a :href="profile">Profile</a>
        </li>
         <li>
            <a :href="register">Register</a>
        </li>
    </ul>
</template>

<script>
    import EventBus from './EventBus'

    EventBus.$on('logged-in', test => {
        console.log(test)
    })

    export default {
        data() {
            return {
                auth: '',
                user:''
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('usertoken')
            }
        },
        mounted() {
            EventBus.$on('logged-in', status => {
                this.auth = status
            })
        }

    }
</script>