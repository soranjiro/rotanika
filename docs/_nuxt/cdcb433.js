(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{262:function(e,n,t){"use strict";t.r(n),t.d(n,"quizzesNumber",(function(){return r})),t.d(n,"keywordsNumber",(function(){return o})),t.d(n,"quizzesElement",(function(){return d})),t.d(n,"keywordsElement",(function(){return w}));var r=[{question:"奇数ですか",answers:["yes","no"],nextQuizIndexes:[1,4],finalAnswer:[-1,-1]},{question:"素数ですか",answers:["yes","no"],nextQuizIndexes:[2,3],finalAnswer:[-1,-1]},{question:"メルセンヌ素数ですか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[0,1]},{question:"約数は7つ以上ありますか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[2,3]},{question:"平方数ですか",answers:["yes","no"],nextQuizIndexes:[5,6],finalAnswer:[-1,-1]},{question:"2^nで表せますか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[4,5]},{question:"完全数ですか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[6,7]}],o=[2147483647,6904303451,9458583811,2047088711,4294967296,2952183556,8589869056,6655983616],d=[{question:"常温で気体ですか",answers:["yes","no"],nextQuizIndexes:[1,4],finalAnswer:[-1,-1]},{question:"-150°Fでも気体ですか",answers:["yes","no"],nextQuizIndexes:[2,3],finalAnswer:[-1,-1]},{question:"カメラのフラッシュに使われていますか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[0,1]},{question:"気体の中で最も重たい元素ですか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[2,3]},{question:"原子番号は100以下ですか",answers:["yes","no"],nextQuizIndexes:[5,6],finalAnswer:[-1,-1]},{question:"酸素と結合して黄色になりますか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[4,5]},{question:"発見したのは女性ですか",answers:["yes","no"],nextQuizIndexes:[0,1],finalAnswer:[6,7]}],w=["Kr","Xe","Rn","Cl","Pr","Dy","Mt","Fl"];n.default=["数","原子"]},264:function(e,n,t){var content=t(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(132).default)("01b580b0",content,!0,{sourceMap:!1})},269:function(e,n,t){"use strict";t(264)},270:function(e,n,t){var r=t(131)((function(i){return i[1]}));r.push([e.i,"div[data-v-654b5604]{text-align:center}h1[data-v-654b5604]{color:#333;font-size:2em;margin-bottom:20px}p[data-v-654b5604]{color:#666;font-size:1.2em}button[data-v-654b5604]{background-color:#008cba;border:none;color:#fff;cursor:pointer;display:inline-block;font-size:16px;margin:4px 2px;padding:15px 32px;text-align:center;-webkit-text-decoration:none;text-decoration:none}",""]),r.locals={},e.exports=r},276:function(e,n,t){"use strict";t.r(n);var r=t(262),o={data:function(){return{quiz:null,genreIndex:parseInt(this.$route.query.genreIndex),genres:r.default,quizzes:null,keywords:null,currentQuizCount:1,currentQuizIndex:0,currentAnswerIndex:-1,time:0}},created:function(){this.getQuizzesKeywords(),this.currentKeywordIndex=Math.floor(Math.random()*this.keywords.length),this.getQuiz()},methods:{submitAnswer:function(e){this.currentQuizIndex=this.quiz.nextQuizIndexes[e],this.currentAnswerIndex=this.quiz.finalAnswer[e],this.currentQuizCount++,-1!=this.currentAnswerIndex?this.$router.push({path:"/answer",query:{genreIndex:this.genreIndex,realAnswerIndex:this.currentKeywordIndex,finalAnswerIndex:this.currentAnswerIndex}}):this.getQuiz()},getQuiz:function(){this.quiz=this.quizzes[this.currentQuizIndex]},getQuizzesKeywords:function(){switch(this.genreIndex){case 0:this.quizzes=r.quizzesNumber,this.keywords=r.keywordsNumber;break;case 1:this.quizzes=r.quizzesElement,this.keywords=r.keywordsElement}}}},d=(t(269),t(43)),component=Object(d.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("Rotanika")]),e._v(" "),e.quiz?n("div",[n("p",[e._v("ジャンル: "+e._s(e.genres[e.genreIndex]))]),e._v(" "),n("p",[e._v("Q"+e._s(e.currentQuizCount)+": "+e._s(e.quiz.question))]),e._v(" "),n("p",[e._v("キーワード: "+e._s(e.keywords[e.currentKeywordIndex]))]),e._v(" "),e._l(e.quiz.answers,(function(t,r){return n("button",{key:r,on:{click:function(n){return e.submitAnswer(r)}}},[e._v("\n        "+e._s(t)+"\n        ")])}))],2):n("p",[e._v("読み込み中...")])])}),[],!1,null,"654b5604",null);n.default=component.exports}}]);