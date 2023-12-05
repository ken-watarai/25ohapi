const section1_comment = document.getElementById("section1-comment");
const section1_comments = [
  "ごろごろ大好き",
  "だって布団がまだって言うから",
  "ごろごろは平和",
  "平和が一番",
  "布団は平和の象徴",
  "鳩じゃない、鳩は許さないわよ",
  "ところで今日何日？",
  "あ、誕生日だ、",
  "あぶない、<br>寝過ごすとこだった",
  "わてぃに祝ってもらおうかしら",
  "かしこまりました！wty"
]

const section2_comment = document.getElementById("section2-comment");
const section2_comments = [
  "どうでしょうかwty",
  "まあ点数はLINEするね",
  "わてぃ、これいつ作ってたの？",
  "夜中ですwty",
  "今眠い？",
  "はいwty",
  "わたしも",
  "知ってるwty",
  "zzz",
  "寝るのはやっ、wty"
]

function comment_generator(list, sec_cmt) {
  for (let i = 0; i < list.length; i++) {
    const newP = document.createElement("p");
    const newSpan = document.createElement("span");
    let comment = list[i];
    if(comment.slice(-3) == "wty"){
      const wty_cmt = comment.replace("wty", "");
      newSpan.textContent = wty_cmt;
      newP.classList.add('watty');
    } else {
      newSpan.textContent = comment;
    }
    newP.appendChild(newSpan);
    sec_cmt.appendChild(newP);
  }
}
comment_generator(section1_comments, section1_comment);
comment_generator(section2_comments, section2_comment);


window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".js-area");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
  
    //位置とscaleを指定
    items.forEach((item, i) => {
      gsap.set(item, {
        zIndex : num - i,
      });
    });
    gsap.set(".js-item01", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item02", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item03", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item04", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item05", {
      scale: 0, width: "100%", height: "100%", left: 0, top: 0,
    });
  
    //タイムライン
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=1000", //終了位置
        scrub: true, //ピン留め
        pin: true, //スクロール量に応じて動かす
      }
    });
  
    //要素を順に拡大する
    tl.to(".js-item01", { scale: 1, left: "-27.5%", duration: 1 },"-=0.5")
      .to(".js-item01", { opacity: 0, duration: 0.2 }, "-=0.2")
    tl.to(".js-item02", { scale: 1, left: "-20%", duration: 1 },"-=0.5")
      .to(".js-item02", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item03", { scale: 1, left: "40%", duration: 1 }, "-=0.5")
      .to(".js-item03", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item04", { scale: 1, left: "52.5%", duration: 1 }, "-=0.5")
      .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item05", { scale: 1, duration: 1 }, "-=0.5")
  });


//スクロールイベント
let targets = document.querySelectorAll('.js-scroll'); //アニメーションさせたい要素
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
window.addEventListener('scroll', function () {
  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      img1.classList.add('disappear');
      img2.classList.remove('disappear');
    } else {
        img1.classList.remove('disappear');
        img2.classList.add('disappear');
    }
  }
});