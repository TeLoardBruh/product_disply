<template>
  <div>
    <v-text-field v-if="controlType === 'input'" :label="label"> </v-text-field>
    <v-textarea v-if="controlType === 'textarea'" :label="label"></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: "input",
    },
    label: {
      type: String,
      default: "input",
    },
  },
};
</script>
