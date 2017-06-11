/**
 * Created by hxiao on 2017/6/10.
 */
$(function () {
    $(".intro-heading.typewriter-ph").typed({
        strings: banner_strings[banner_id],
        typeSpeed: 0,
        loop: true,
        showCursor: false
    });
});

banner_id = Math.floor(Math.random() * 5) + 1;
$('header.masthead').css('background-image', 'url(img/header/bg' + banner_id + '.jpg)');


banner_strings = {
    1: ["<code>from aichina.de import *^3000</code>", "<maintitle>中德人工智能协会^1000</maintitle><br><subtitle>你施展技术的平台</subtitle>^5000"],
    2: ["<code>$P(x|y)=P(y|x)P(x)/P(y)$^3000</code>", "<maintitle>中德人工智能协会^1000</maintitle><br><subtitle>你施展技术的平台</subtitle>^5000"],
    3: ["<code>我要在德国做AI创业，成为一只独角兽^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>AI创业公司的的孵化平台</subtitle>^5000"],
    4: ["<code>我有个好算法，想回国做第二个FaceU，从此走上人生巅峰^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>帮助海归人才在国内落地</subtitle>^5000"],
    5: ["<code>谁懂RNN中怎么做不定长的Sequence?^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>你与同行切磋交流的平台</subtitle>^5000"]
};