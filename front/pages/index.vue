<template>
  <v-container>
    <post-form v-if="me" />
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard';
import PostForm from '~/components/PostForm';

export default {
  components: {
    PostCard,
    PostForm,
  },
  data() {
    return {
      name: 'Nuxt.js',
    };
  },
  fetch({ store }) {
    return store.dispatch('posts/loadPosts', { reset: true });
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost() {
      return this.$store.state.posts.hasMorePost;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (this.hasMorePost) {
          this.$store.dispatch('posts/loadPosts');
        }
      }
    },
  },
};
</script>

<style></style>

댓글 로드 어디감??/
