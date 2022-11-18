(function() {
    'use strict'
    let href = window.location.href

    if (href.indexOf('www.zhihu.com/question/') != -1) {
        // close zhihu login page when not logged
        window.onload = () => {
            let btn = document.querySelector('.Button.Modal-closeButton.Button--plain')
            if (btn) btn.click()

            return
        }
    }

    if (href.indexOf('zhuanlan.zhihu.com/p/') != -1) {
        // close zhihu login page when not logged
        window.onload = () => {

            let btn2 = document.querySelector('.Button.Modal-closeButton')
            if (btn2) btn2.click()

            return
        }
    }
    // redirect for zhihu, weibo, qqmail, csdn sites
    let link = document.querySelector('.link') || document.querySelector('.safety-url') || document.querySelector('.loading-color2')
    let url = link ? link.textContent : ''
    if (url) {
        window.location.href = url
        return
    }

    // redirect for jianshu site
    let getParams = field => {
        let urlObject = new URL(href)
        let res = urlObject.searchParams.get(field)
        return res
    }
    url = getParams('url')
    if (url) window.location.href = url
})()
