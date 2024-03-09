<template>
    <div>
        <h1>Rotanika</h1>
        <div v-if="quiz">
            <p>ジャンル: {{ genres[genreIndex] }}</p>
            <p>Q{{ currentQuizCount }}: {{ quiz.question }}</p>
            <p>キーワード: {{ keywords[currentKeywordIndex] }}</p>
            <button v-for="(answer, index) in quiz.answers" :key="index" @click="submitAnswer(index)">
            {{ answer }}
            </button>
        </div>
        <p v-else>読み込み中...</p>
    </div>
</template>

<script>
import genres, { quizzesNumber, keywordsNumber, quizzesElement, keywordsElement } from './quizzes.js';

export default {
    data() {
        return {
            quiz: null,
            genreIndex: parseInt(this.$route.query.genreIndex),
            genres: genres,
            quizzes: null,
            keywords: null,
            currentQuizCount: 1,
            currentQuizIndex: 0,
            currentAnswerIndex: -1,
            time: 0
        };
    },
    created() {
        this.getQuizzesKeywords();
        this.currentKeywordIndex = Math.floor(Math.random() * this.keywords.length);
        this.getQuiz();
    },
    methods: {
        submitAnswer(answerIndex) {
            this.currentQuizIndex = this.quiz.nextQuizIndexes[answerIndex];
            this.currentAnswerIndex = this.quiz.finalAnswer[answerIndex];
            this.currentQuizCount++;
            if (this.currentAnswerIndex != -1) {
            //this.$store.commit('setScore', this.score);
            //this.$router.push('/answer');  // answer画面へ遷移
            this.$router.push({
                path: '/answer',
                query: {
                    genreIndex: this.genreIndex,
                    realAnswerIndex: this.currentKeywordIndex,
                    finalAnswerIndex: this.currentAnswerIndex
                }
                });
            } else {
            this.getQuiz();
            }
        },
        getQuiz() {
            this.quiz = this.quizzes[this.currentQuizIndex];
        },
        getQuizzesKeywords() {
            switch (this.genreIndex) {
            case 0:
                this.quizzes = quizzesNumber;
                this.keywords = keywordsNumber;
                break;
            case 1:
                this.quizzes = quizzesElement;
                this.keywords = keywordsElement;
                break;
            default:
                break;
            }
        }
    }
};
</script>

<style scoped src="./styles.css"></style>
