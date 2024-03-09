<template>
    <div>
        <h1>結果</h1>
        <p>ジャンル: {{ genres[genreIndex] }}</p>
        <p v-if="isCorrect">Rotanikaが予測したお題: {{ keywords[this.$route.query.finalAnswerIndex] }}</p>
        <p v-else>Rotanikaが予測したお題: ***<br>（成功すると確認できます）</p>
        <p>あなたのお題: {{ keywords[this.$route.query.realAnswerIndex] }}</p>
        <br>
        <p v-if="isCorrect">成功です！<br>Rotanikaが予測したお題とあなたのお題が一致しました！</p>
        <p v-else>残念、失敗です。<br>Rotanikaはあなたのお題を予想できませんでした。</p>
        <button @click="goBack">もう一度</button>
    </div>
</template>

<script>
import genres, { keywordsNumber, keywordsElement } from './quizzes.js';

export default {
    data() {
        return {
            genreIndex: parseInt(this.$route.query.genreIndex),
            genres: genres,
            keywords: keywordsNumber,
        };
    },
    computed: {
        isCorrect() {
            return this.$route.query.finalAnswerIndex === this.$route.query.realAnswerIndex;
        }
    },
    created() {
        this.getKeywords();
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
        getKeywords() {
            switch (this.genreIndex) {
            case 0:
                this.keywords = keywordsNumber;
                break;
            case 1:
                this.keywords = keywordsElement;
            default:
                break;
            }
        }
    }
}
</script>

<style scoped src="./styles.css"></style>
