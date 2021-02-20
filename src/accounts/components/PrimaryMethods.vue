<template>
  <div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    }
  },
  components: {
  },
  props: [
  ],
  methods: {
    createNewAccount: function(accountData) {
      createAccount(accountData).then(response => {
        this.createAccountModalOpen = false;
        this.$emit('refreshAccountData');
        return response;
      });
    }
  },
}
</script>