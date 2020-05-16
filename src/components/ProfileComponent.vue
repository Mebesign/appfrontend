<template>
    <div>
        fistname: {{first_name}} <br>
        lastname: {{last_name}} <br>
        email: {{email}} <br>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
    data() {
        const token = localStorage.usertoken
        const decoded = jwtDecode(token)
        return {
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        }
    }
}
</script>