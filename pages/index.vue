<template>
    <div>
        <h1>Rotanika</h1>
        <div>
            RotanikaはAkinatorに憧れている魔神です。<br>
            Rotanikaの質問に正確に答えて、あなたのお題を答えさせてあげよう！<br>
            ただし、Rotanikaはまだ未熟なので、お題はこちらで決めます。
        </div>
        <div v-if="genres">
            <p>ジャンルを選んでください</p>
            <button v-for="(genre, index) in genres" :key="index" @click="submitGenre(index)">
                {{ genre }}
            </button>
        </div>
        <p v-else>読み込み中...</p>
    </div>
</template>

<script>
import genres from './quizzes.js';

export default {
    data() {
        return {
            genres: genres,
        };
    },
    created() {
    },
    methods: {
        submitGenre(genreIndex) {
            this.$router.push({ path: '/quiz', query: { genreIndex: genreIndex } });
        },
    }
};
</script>

<style scoped src="./styles.css"></style>
