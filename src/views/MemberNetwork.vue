<template>
  <div class="member-network">
    <h2>会员组织图</h2>

    <!-- Search Box -->
    <div class="search-box">
      <input v-model="searchQuery" placeholder="输入用户名..." @keyup.enter="fetchMembers" />
      <button @click="fetchMembers">搜索</button>
    </div>

    <!-- Organization Tree -->
    <div class="tree-container">
      <TreeNode v-if="rootMember" :member="rootMember" />
    </div>
  </div>
</template>

<script>
import { getMemberTree } from '@/api' // API call
import TreeNode from '@/components/TreeNode.vue'

export default {
  components: { TreeNode },
  data() {
    return {
      searchQuery: '',
      rootMember: null,
    }
  },
  methods: {
    async fetchMembers() {
      if (!this.searchQuery) return

      try {
        const data = await getMemberTree(this.searchQuery)
        this.rootMember = data
      } catch (error) {
        console.error('Failed to fetch members:', error)
      }
    },
  },
}
</script>

<style scoped>
.member-network {
  padding: 20px;
}
.search-box {
  margin-bottom: 20px;
}
.tree-container {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}
</style>
