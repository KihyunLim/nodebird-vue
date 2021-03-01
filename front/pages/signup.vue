<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="userId"
              label="아이디"
              :rules="userIdRules"
              required
            />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              label="위의 사항에 동의합니다."
              :rules="termsRules"
              required
            />
            <v-btn color="green" type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: 'anonymous',
  data() {
    return {
      valid: false,
      userId: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      userIdRules: [
        (v) => !!v || '아이디는 필수입니다.',
      ],
      nicknameRules: [(v) => !!v || '닉네임은 필수입니다.'],
      passwordRules: [(v) => !!v || '비밀번호는 필수입니다.'],
      passwordCheckRules: [
        (v) => !!v || '비밀번호 확인은 필수입니다.',
        (v) => v === this.password || '비밀번호가 일치하지 않습니다.',
      ],
      termsRules: [(v) => !!v || '약괸동의는 필수입니다.'],
    };
  },
  head() {
    return {
      title: '회원가입',
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  watch: {
    me(value, oldValue) {
      if (value) {
        this.$router.push({
          path: '/',
        });
      }
    },
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('users/signUp', {
            nickname: this.nickname,
            userId: this.userId,
            password: this.password,
          })
          .then(() => {
            this.$router.push({
              path: '/',
            });
          })
          .catch(() => {
            alert('회원가입 실패');
          });
      }
    },
  },
};
</script>

<style></style>
