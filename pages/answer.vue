<template>
    <div>
        <h1>結果</h1>
        <p>ジャンル: {{ genres[genreIndex] }}</p>
        <p v-if="isCorrect">正解です！</p>
        <p v-else>残念、失敗です。</p>
        <p>キーワード: {{ keywords[this.$route.query.realAnswerIndex] }}</p>
        <!-- <p>答え: {{ keywordsNumber[this.$route.query.finalAnswerIndex] }}</p> -->
        <button @click="goBack">戻る</button>
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
