var posts=["p/fab9b61a.html","p/443d4e6d.html","p/a508658c.html","p/f0675399.html","p/93693f38.html","p/18cd3193.html","p/77c4157d.html","p/4e711f50.html","p/d70bc120.html","p/58ac47f1.html","p/c9555748.html","p/44443bb0.html","p/5f1e1789.html","p/4b6ea061.html","p/3a28e9de.html","p/edda2a4f.html","p/d5159d.html","p/f6fc8a17.html","p/8eba3297.html","p/c20ce0f.html","p/297800d8.html","p/297a89d9.html","p/ef44a69a.html","p/2ce22e0a.html","p/a50803f1.html","p/23c07922.html","p/e8cd55a0.html","p/58594e74.html","p/f2b0fd88.html","p/82ac373d.html","p/c01cdf8.html","p/7fbc0453.html","p/25655542.html","p/24959ba9.html","p/2da0f777.html","p/e0f0b8c3.html","p/e4125a0e.html","p/aee3f9d.html","p/cf3c4c5d.html","p/c2e5c1e.html","p/94ef61b.html","p/b3227f94.html","p/32f9c507.html","p/6fd74b03.html","p/8f216f43.html","p/22334785.html","p/ad49d11.html","p/751d3a41.html","p/69284c87.html","p/110d45bf.html","p/a8fd3792.html","p/5364669b.html","p/ec79dce.html","p/6d82c6bc.html","p/232e0c93.html","p/54a9624.html","p/4491f91d.html","p/b5ce6bc0.html","p/86f6a3c8.html","p/52aa013e.html","p/31eff024.html","p/b2959675.html","p/50b8410.html","p/ae6024e6.html","p/53129964.html","p/10d8e284.html","p/a07d5af0.html","p/68eb426a.html","p/e528bb20.html","p/aba3ffdd.html","p/b1f7ab5e.html","p/643b02f2.html","p/47c678f8.html","p/d77f6986.html","p/36ac9eba.html","p/2b4ae375.html","p/5c6c7fd8.html","p/c41f4a31.html","p/417e13ed.html","p/59e6684.html","p/ea99684a.html","p/6d144bf9.html","p/8517c931.html","p/908b6e53.html","p/310c8fe1.html","p/fb276c71.html","p/ce8e7c6b.html","p/5469eb60.html","p/d7755e3.html","p/bc360a82.html","p/acc73805.html","p/7eabd062.html","p/c5b89f9a.html","p/c74b7580.html","p/510c26d4.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"星尘の主页","link":"https://xingchencloud.top/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=3226477957&spec=640&img_type=jpg","descr":"不会生活，学会生活。","siteshot":null},{"name":"星尘の仓库","link":"https://pan.xingchencloud.top/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=3226477957&spec=640&img_type=jpg","descr":"个人资源分享网盘","siteshot":null,"recommend":true},{"name":"星尘起始页","link":"https://start.xingchencloud.top/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=3226477957&spec=640&img_type=jpg","descr":"一个简单轻便的浏览器起始页","siteshot":null,"recommend":true},{"name":"MysticStars","link":"https://www.mysticstars.cn","avatar":"https://www.mysticstars.cn/upload/MysticStars.svg","descr":"Discover Infinity","siteshot":null},{"name":"Superfishy","link":"https://blog.superfishy.cn/","avatar":"https://blog.superfishy.cn/ico.jpg","descr":"向往一切纯真与美好","siteshot":null},{"name":"梦创空间","link":"https://www.cwwwxl.top/","avatar":"https://pic.cwwwxl.top/img/CO7oAY8ZBjmLEVF.jpg","descr":"大数据协会校友的博客","siteshot":null},{"name":"消·逝","link":"https://blog.xiaoshi.org.cn/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2490300271&spec=640&img_type=jpg","descr":"同学的博客","siteshot":null}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 2) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };