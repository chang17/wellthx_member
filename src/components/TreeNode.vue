<template>
  <div class="tree-node">
    <div class="member">
      <span
        >{{ member.username }} <b>({{ member.fullName }})</b></span
      >
      <button v-if="!expanded && member.hasMore" @click="expandMember">+</button>
    </div>

    <!-- Child Members -->
    <div class="children" v-if="expanded">
      <TreeNode v-for="child in member.children" :key="child.id" :member="child" />
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  props: {
    member: Object,
  },
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    async expandMember() {
      try {
        const data = await api.get('/members/${this.member.username}')
        this.member.children = data.children
        this.expanded = true
      } catch (error) {
        console.error('Failed to expand:', error)
      }
    },
  },
}
</script>

<style scoped>
.tree-node {
  margin-left: 20px;
}
.member {
  display: flex;
  align-items: center;
}
button {
  margin-left: 5px;
}
</style>
