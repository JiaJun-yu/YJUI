<template>
  <button 
    class="yj_button"
    :class="[
      type ? 'yj_button-' + type : '',
      {
        'disabled': disabled,
        'loading': loading
      }
    ]"
    @click="handleClick"
  >

    <div class="yj_icon-loading" v-if="loading"></div>

    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'yj-button',

  props: {
    type: {
      type: String,
      default: () => 'default'
    },

    loading: {
      type: Boolean,
      default: () => false
    },

    disabled: {
      type: Boolean,
      default: () => false
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
