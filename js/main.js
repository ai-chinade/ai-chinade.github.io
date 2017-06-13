/**
 * Created by hxiao on 2017/6/10.
 */


banner_strings = {
    0: ["<code>from aichina.de import *^3000</code>", "<maintitle>中德人工智能协会^1000</maintitle><br><subtitle>你学习技术知识的摇篮</subtitle>^5000"],
    1: ["<code>阿尔法狗是如何实现的^3000</code>", "<maintitle>中德人工智能协会^1000</maintitle><br><subtitle>你与同行切磋交流的平台</subtitle>^5000"],
    2: ["<code>我要在德国用AI创业，成为一只独角兽^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>AI创业公司的的孵化园</subtitle>^5000"],
    3: ["<code>我刚答辩完想回国创个业，从此走上人生巅峰^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>帮助海归人才在国内落地</subtitle>^5000"],
    4: ["<code>我想找个德/中国的AI企业一起搞点事情^3000</code>", "<maintitle>中德人工智能协会^1000<br></maintitle><subtitle>为你架设交流的桥梁</subtitle>^5000"]
};

function startTyping(banner_id) {
    $(".intro-heading.typewriter-ph").typed({
        strings: banner_strings[banner_id],
        typeSpeed: 0,
        loop: false,
        showCursor: false,
        callback: function () {
            $('.carousel').carousel('next');
            startTyping((banner_id + 1) % 5)
        }
    });
}


startTyping(0);