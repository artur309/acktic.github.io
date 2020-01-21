
var gif
var op = 0
var request
var ost = 0
var his = 0
var evt = true
var job = false
var sel = 'Social'

if (location.href.match('\\?op=1')) {

    app(1)

} else app(op)

pop(sel)
air(sel)
scr('#pop:last')

$('.random').on('touchstart click', function(e) {

    ran(sel)

    e.preventDefault()

})

$('.opposite').on('touchstart click', function(e) {

    app('op')

    e.preventDefault()

})

$('.category').on('touchstart click', function(e) {

    his = 0
    evt = true
    $('#pop, #air, .arm, .get').remove()
    air($(this).attr('id'))
    pop($(this).attr('id'))
    scr('#pop:last')
    setTimeout(function() {
        evt = false
    }, 250)
    e.preventDefault()

})

$('.fav').on('touchstart click', function(e) {

    evt = true
    air(sel)
    pop(sel)
    scr('#pop:last')
    setTimeout(function() {
        evt = false
    }, 250)
    e.preventDefault()
    e.stopPropagation()

})

$('#inv').on('touchstart click mousemove mouseleave', function(e) {

    if (e.type == 'touchstart' || e.type == 'click') {
        $('#inv').css({
            '-moz-box-shadow': '1px 1px 5px #888',
            'box-shadow': '1px 1px 5px #eee'
        })
        setTimeout(function() {
            $('#inv').css({
                '-moz-box-shadow': '1px 1px 5px #aaa',
                'box-shadow': '1px 1px 5px #aaa'
            })
        }, 50)
    }
    if (e.type == 'mousemove') $(this).css({
        '-moz-box-shadow': '1px 1px 5px #aaa',
        'box-shadow': '1px 1px 5px #aaa'
    })
    else if (e.type == 'mouseleave') $(this).css({
        '-moz-box-shadow': '1px 1px 5px #ccc',
        'box-shadow': '1px 1px 5px #ccc'
    })

})

$('.output').on('scroll touchmove focusout', function(e) {

    if (e.type == 'scroll' || e.type == 'touchmove') {

        pin($(this).scrollTop())
        if ($(this).scrollTop() != 0 && $(this).scrollTop() != $('air').outerHeight()) job = false
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 100 && job == false) pop(sel)

    } else if (e.type == 'focusout') setTimeout(function() {
        $('.output').focus()
    }, 100)

}).attr('tabindex', -1).focus()


String.prototype.trunc =

    function(n, e) {

        if (this.length <= n) return this
        var subString = this.substr(0, n - 1)
        return (e ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "&hellip;"

    }

function abr(n, e) {

    e = Math.pow(10, e);
    var a = ["k", "m", "b", "t"]

    for (var i = a.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3)
        if (size <= n) {
            n = Math.round(n * e / size) / e
            if ((n == 1000) && (i < a.length - 1)) {
                n = 1
                i++
            }
            n += a[i]
        }
    }

    return n

}

function scr(n) {
    $('.output').animate({
        scrollTop: $(n + ':last').offset().top - $('.output').offset().top + $('.output').scrollTop()
    }, 100);
    setTimeout(function() {
        evt = false
    }, 250)
}

function pin(n) {

    if (job == true) {
        $('.fav').css({
            'transition': 'opacity .2s linear, visibility .2s linear',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '1',
            'visibility': 'visible'
        })
    }
    if (n < ost - 5) {
        $('.fav').css({
            'transition': 'opacity .2s linear, visibility .2s linear',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '1',
            'visibility': 'visible'
        })
    } else if (n > ost + 5 && job == false && evt == false) {
        $('.fav').css({
            'transition': 'all .2s linear',
            'opacity': '0',
            'visible': 'hidden'
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '0',
            'visibility': 'hidden'
        })
    }

    ost = n

}

function ran(n) {

    var obj = []
    $.each(menu, function(i, k) {
        if (n == k.cat) obj.push(menu[i])
    })
    var n = obj[Math.floor(Math.random() * obj.length)]
    get(menu.indexOf(n))

}

function rev(Object) {

    var newObject = {}
    var keys = []
    for (var key in Object) keys.push(key)
    for (var i = keys.length - 1; i >= 0; i--) {

        var value = Object[keys[i]]
        newObject[keys[i]] = value

    }

    return newObject

}

function utc(n) {

    var opt = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: '2-digit',
        hour12: true
    }
    var dmz = []
    dmz.push(ago(n))
    var utc = new Date(n)
    var gmt = utc.toLocaleString('en-US', opt)
    dmz.push(gmt)

    return dmz

}

function ago(n) {

    var age = new Date()
    var dis = age.getTime() - new Date(n).getTime()
    var sec = dis / 1000
    if (sec < 60) return parseInt(sec) + ' second' + (parseInt(sec) > 1 ? 's' : '') + ' ago'
    var min = sec / 60;
    if (min < 60) return parseInt(min) + ' minute' + (parseInt(min) > 1 ? 's' : '') + ' ago'
    var h = min / 60;
    if (h < 24) return parseInt(h) + ' hour' + (parseInt(h) > 1 ? 's' : '') + ' ago'
    var d = h / 24;
    if (d < 30) return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' : '') + ' ago'
    var m = d / 30;
    if (m < 12) return parseInt(m) + ' month' + (parseInt(m) > 1 ? 's' : '') + ' ago'
    var y = m / 121

    return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '') + ' ago'

}

function app(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n

    if (op == 1) {
        $('html, .wrapper, .container, .output, .pop, .air, .box').css({
            'border': 'none',
            'background-color': '#000',
            'color': 'rgba(255,255,255,.8)'
        })
        $('.pub, .ago, .category').css({
            'border-bottom': 'none',
            'color': 'rgba(255,255,255,.8)'
        })
        $('.random, .opposite, #' + sel).css('border-bottom', '1px solid rgba(255,255,255,.2)')
        $('.attach').css('background-color', 'rgba(0, 0, 0, .7)')
        $('.output').removeClass('invert').addClass('default')
        $('.gif').attr('src', 'favicon/favico.png')
        $('.img').css('filter', 'brightness(75%)')
        $('#inv').hide();
        $('#fav').show()
        $('a').css('color', '#F7426B')
        gif = 'favico.png'
    } else if (op == 0) {
        $('.container, .output, .pop, .air').css({
            'background-color': '#fff',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.pub, .ago, .category').css({
            'border-bottom': 'none',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.random, .opposite, #' + sel).css('border-bottom', '1px solid rgba(0,0,0,.1)')
        $('.box').css({
            'border': '1px solid #eee',
            'background-color': '#fafafa',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.attach').css('background-color', 'rgba(255, 255, 255, .9)')
        $('.output').removeClass('default').addClass('invert')
        $('html, .wrapper').css({
            'border': '1px solid #ddd',
            'background-color': '#fafafa'
        })
        $('.gif').attr('src', 'favicon/invert.png')
        $('.img').css('filter', 'brightness(100%)')
        $('#fav').hide();
        $('#inv').show()
        $('a').css('color', '#08BD94')
        gif = 'invert.png'
    }

}

function air(n) {

    rev(menu.reverse())
    $('.output').prepend("<div id='air'></div>")
    for (var i = menu.reverse().length - 1; i >= 0; i--) {
        if (n == menu[i].cat) $('#air').prepend("<div class='air' onclick='get(" + i + ")'>" + menu[i].des + "</div>")
    }
    $('.output').scrollTop($('.output').scrollTop() + $('#air:first').outerHeight())
    app()

}

function pop(n) {

    if (job == true && $('#pop, #air').length == 0) {
        request.abort();
        job = false
    }
    if ($('#pop, #air').length > 2) {
        $('#pop, #air:last, .get').remove()
    }
    document.title = n + ' ack'
    if (n != sel) his = 0
    sel = n
    $('.output').append("<div id='pop'></div>")
    for (var i = his; i < menu.length; i++)
        if (n == menu[i].cat) $('#pop').append("<div class='pop' onclick='get(" + i + ")'>" + menu[i].des + "</div>")
    his = 0
    app()

}


function res(i, n) {

    var e = new Image()
    e.onload = function() {

        if (e.width > 320) $('#' + i).width('100%')
        $('#' + i).css('display', 'block')

    }

    e.src = n

}

function get(n) {
    if (job == true) {
        request.abort();
        job = false
    }
    his = n
    job = true
    var pub = []
    $('#pop, #air, .arm, .get').remove()
    if (sel == 'Youtube') {
        var quit = 5
    } else {
        var quit = 11
    }
    $('.output').append("<div class='arm'></div><div class='get'></div>")
    $('.arm').html("<div style='display:inline-block'><img class='gif' src='favicon/" + gif + "'></div>")
    request = $.get('https://acktic-github-io.herokuapp.com/' + menu[n].uri)
        .fail(function() {
            $('.arm').remove();
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")' style='margin-bottom:2em'>" + menu[n].des + "</div><br>");
            job = false
        })
        .done(function(data) {
            $('.arm').remove()
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].des + "</div><br>")
            if ($(data).find('entry').length > 0) var chn = "entry"
            else var chn = 'item'
            if ($(data).find(chn).length < quit) {
                quit = $(data).find(chn).length
            }
            $(data).find(chn).each(function(i) {
                if (chn == 'entry') {
                    var ref = $(this).find('link').attr('href')
                    var dst = utc($(this).find('updated').text());
                    var gen = new Date($(this).find('updated').text()).getTime()
                } else if (chn = 'item') {
                    var ref = $(this).find('link').text()
                    if ($(this).find('pubDate').text().length > 0) {
                        var dst = utc($(this).find('pubDate').text());
                        var gen = new Date($(this).find('pubDate').text()).getTime()
                    } else {
                        var dst = utc($(this).find('dc\\:date, date').text());
                        var gen = new Date($(this).find('dc\\:date').text()).getTime()
                    }
                }
                if ($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(png|jpg)/g)) src = String($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(png|jpg)/g))
                else if ($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(png|jpg)/g)) src = String($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(png|jpg)/g))
                else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(png|jpg)/)) src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(png|jpg)/)[0])
                else if ($(this).find('link').attr('href'))
                    if ($(this).find('link').attr('href').match(/youtube/)) {
                        src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
                    } else {
                        src = String($(this).find('link').attr('href'))
                    }
                else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                else if ($(this).find('media\\:content, content, enclosure').attr('url'))
                    if (!menu[n].id.match(/Yahoo/)) {
                        src = String($(this).find('media\\:content, content, enclosure').attr('url'))
                    } else {
                        src = String($(this).find('media\\:content, content, enclosure').attr('url').match(/(https:\/\/.+)/)[1].split(','))
                    }
                else if ($(this).find('content\\:encoded:first').text().match(/src=['"](.*?)['"]/)) src = String($(this).find('content\\:encoded:first').text().match(/src=['"](.*?)['"]/)[1])
                else if ($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)) src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
                else if ($(this).find('image').text()) src = String($(this).find('image').text())
                if (!src || src.match(/comments|twitter|undefined/) || !src.match(/https|embed|\.gif|\.jpg|\.jpeg|media|\.png/)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div class='ago' style='text-align:left'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div>"
                if (src.match(/youtube/))
                    ext = "<div id='yt' class='box' style='width: 100%'><div class='pub'>" + $(this).find('title:first').text().trim().trunc(90, true) + "</div>" +
                    "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                    "<div class='yt'><iframe src='" + src + "'></iframe>" +
                    "<div class='ago pro' style='left:0em'><b>Views</b> " + abr($(this).find('media\\:statistics, statistics').attr('views'), 2) + "</div>" +
                    "<div class='ago pro' style='right:0em'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div></div>"
                else ext = "<div class='box'  onclick='window.open(\"" + ref.trim() + "\")'><div class='pub'>" + $(this).find('title:first').text().trim().trunc(90, true) + "</div>" +
                    "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                    "<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + '</div>'

                var top = {
                    e: i,
                    top: gen,
                    pub: ext
                }
                pub.push(top)
            })
            pub.sort(function(a, b) {
                return b.top - a.top
            })
            for (var k = 0; k <= quit - 1; k++) {
                $('.get').append(pub[k].pub)
                if ($('#' + pub[k].e).length) res(pub[k].e, $('#' + pub[k].e).attr('src'))
            }
            air(sel)
            pop(sel)
            scr('.get')
        })
}
