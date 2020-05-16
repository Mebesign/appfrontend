<template>

  <div>

        <div v-for="proposal in proposals"
        v-bind:key="proposal.id"
        >
          <v-card
            class="mx-auto"
            max-width="70%"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Proposition commerciale </div>
                <v-list-item-title class="headline mb-1">{{ proposal.t_firstname }} {{ proposal.t_lastname }}</v-list-item-title>
                <v-list-item-subtitle>{{ proposal.t_email }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ proposal.e_firstname }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ proposal.e_lastname }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ proposal.e_email }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ proposal.body }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Export pdf</v-btn>
              <v-btn text>Send by email</v-btn>
            </v-card-actions>
          </v-card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProposalDetail',
  data() {
    return {
      proposals: {
        t_firstname: '',
        t_lastname: '',
        t_email: '',
        e_firstname: '',
        e_lastname: '',
        e_email: '',
        body: ''
      },
        error: ''
    }
  },

  mounted() {
  axios
    .get(`http://localhost:3000/proposals/${this.$route.params.id}`)
    .then(response => (this.proposals = response.data.proposal))
  }
}
</script>