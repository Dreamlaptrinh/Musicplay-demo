const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)
const PLAYER_STORAGE_KEY = 'F8-PLAYER'

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs:[
        {
            name: 'Cô đơn trên sofa',
            singer: 'Trung Quân Idol',
            path:'./Song/CoDonTrenSofaLiveCoverAtSoulOfTheForest-TrungQuanIdol-8520175.mp3',
            image:'./Song/img/Sofa.jpg'
        },
        {
            name: 'Anh chưa thương em đến vậy đâu',
            singer: 'Myra Trần',
            path:'./Song/Anh Chưa Thương Em Đến Vậy Đâu (Live At Ca Sĩ Mặt Nạ) - Ca Sĩ Mặt Nạ.mp3',
            image:'./Song/img/Anh chưa thương em đến vậy đâu.jpg'
        },
        {
            name: 'Là do em xui',
            singer: 'Sofia',
            path:'./Song/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3',
            image:'./Song/img/Là do em xui.jpg'
        },
        {
            name: 'Tương tư thành họa',
            singer: 'Đăng Quang Trần',
            path: './Song/TuongTuThanhHoa-QuangDangTran-8738049.mp3',
            image:'./Song/img/Tương tư.jpg'
        },
        {
            name: 'Tình nào không như tình đầu',
            singer: 'Trung Quân',
            path: './Song/TinhNaoKhongNhuTinhDau-TrungQuanIdol-6588171.mp3',
            image:'./Song/img/Tình nào.jpg'
        },
        {
            name:'Lâu lâu lại nhắc',
            singer: 'Hà Nhi',
            path:'./Song/LauLauNhacLai-HaNhiKhoi-7948601.mp3',
            image:'./Song/img/Lâu lâu.jpg'
        },
        {
            name:'Và ngày nào đó',
            singer: 'Trung Quân',
            path: './Song/VaNgayNaoDoLiveAtDearOcean-TrungQuanIdol-8446799.mp3',
            image:'./Song/img/Và ngày nào đó.jpg'
        },
        {
            name:'Chưa quên người yêu cũ',
            singer: 'Hà Nhi',
            path: './Song/ChuaQuenNguoiYeuCu-HaNhi-7662060.mp3',
            image:'./Song/img/Chưa quên.jpg'
        },
        {
            name:'Cưới đi',
            singer: '2T',
            path: './Song/CuoiDi-2TChangC-6560962.mp3',
            image:'./Song/img/Cưới đi.jpg'
        },
        {
            name:'Để tôi ôm em bằng giai điệu này',
            singer: 'Min',
            path: './Song/DeToiOmEmBangGiaiDieuNay-KaiDinhMINGREYD-8416034.mp3',
            image:'./Song/img/Để tôi ôm lấy.jpg'
        },
        {
            name:'Một ngàn nỗi đau',
            singer: 'Trung Quân',
            path: './Song/MotNganNoiDauLiveAtSoulOfTheForest-TrungQuanIdol-7847944.mp3',
            image:'./Song/img/Một ngàn nỗi đau.jpg'
        },
        {
            name:'Ngày mai em đi mất',
            singer: 'Đạt G',
            path: './Song/NgayMaiEmDiMatLiveAtDearOcean-DatG-8446681.mp3',
            image:'./Song/img/Ngày mai em đi mất.jpg'
        },
        {
            name:'Tình em là đại dương',
            singer: 'Grey D',
            path: './Song/tinhemladaiduong-GREYDDoanTheLanHoangDungTheVoice-7584551.mp3',
            image:'./Song/img/Tình anh.jpg'
        },
        {
            name:'Tự tình',
            singer: 'Trung Quân',
            path: './Song/TuTinh2-TrungQuanIdol-7944467.mp3',
            image:'./Song/img/Tự tình 2.jpg'
        },
        {
            name:'Yêu 4',
            singer: 'Rhymastic',
            path: './Song/Yeu-4-Rhymastic.mp3',
            image:'./Song/img/Yêu 4.jpg'
        },
        {
            name:'Yêu 5',
            singer: 'Rhymastic',
            path: './Song/Yeu5-Rhymastic-4756973.mp3',
            image:'./Song/img/Yêu 5.jpg'
        },
        {
            name:'Ai chung tình được mãi',
            singer: 'Trung Quân',
            path: './Song/AiChungTinhDuocMaiCover-TrungQuanIdol-7293429.mp3',
            image:'./Song/img/Ai chung.jpg'
        },
        {
            name:'Trò đùa',
            singer: 'Đăng Quang Trần',
            path: './Song/TroDuaOriginalVersion-QuangDangTran-6267339.mp3',
            image:'./Song/img/Trò đùa.jpg'
        },
        {
            name:'Tiền nhiều để làm gì',
            singer: 'G.Ducky',
            path: './Song/Tiền Nhiều Để Làm Gì Rap Việt - G.Ducky.mp3',
            image:'./Song/img/Rap việt.jpg'
        },
        {
            name:'Đây là rap việt',
            singer: 'Rap việt',
            path: './Song/Đây Là Rap Việt - Rhymastic, JustaTee, Karik, Suboi, Binz, Wowy.mp3',
            image:'./Song/img/Rap việt.jpg'
        },
        {
            name:'Giàu vì bạn sang vì vợ',
            singer: 'Rap việt',
            path: './Song/Giàu Vì Bạn Sang Vì Vợ - RPT MCK.mp3',
            image:'./Song/img/Rap việt.jpg'
        },
        {
            name:'Thích qua rùi nà',
            singer: 'Rap việt',
            path: './Song/Thích Quá Rồi Nà - Tlinh Trung Trần Wxrdie Nger Pacman.mp3',
            image:'./Song/img/Rap việt.jpg'
        },
    ] ,
    setConfig: function (key, value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render : function(){
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : '' }" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="options"> 
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>   
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function(){
        const _this = this
        const cdwidth = cd.offsetWidth


        //Xử lý CD quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform:'rotate(360deg)'}
        ],{
            duration : 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()
        

        //Xử lý phóng to thu nhỏ Cd
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdwith = cdwidth - scrollTop
            cd.style.width = newCdwith > 0 ? newCdwith + 'px':0
            cd.style.opacity = newCdwith / cdwidth 
        }
        // Xử lý khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            } else {
            audio.play()
        }
        }

        //Khi song được play
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        //Khi song bị pause
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }
        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                progress.value = progressPercent
            }
        }
        // Xử lý khi tua song
        progress.onchange = function(e){
            const seekTime = e.target.value * audio.duration /100
            audio.currentTime = seekTime
        }
        //Khi next song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
            _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //Khi prev song
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
            _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //Xử lý bật/ tắt random song
        randomBtn.onclick = function(e){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active',_this.isRandom)
        }

        // Xử lý phát lại 1 bài hát
        repeatBtn.onclick = function(e){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }

        //Xử lý next song khi audio ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
            nextBtn.click()
            }
        }
        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')
            // Xử lý khi click vào song 
            if (songNode || e.target.closest('.options')){
                // Xử lý khi clik vào song
                if (songNode){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    audio.play()
                    _this.render()
                }
                // Xử lý khi clik vào options
                if (e.target.closest('.song:not(.active)')){

                }
            }
        }


    },
    // getCurrentSong: function(){
    //     return this.song[this.currentIndex]
    // },

    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }, 300);
    },


    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat

    },
    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex>=this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex<0 ){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function(){
        let newIndex 
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()

    },
    start: function(){
        //Gán cấu  hình từ config  vào  ứng dụng
        this.loadConfig()

        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

         // Lắng nghe và xử lý các sự kiện
        this.handleEvents();

        //Tải thông tin bài hát đầu tiên vào ứng dụng
        this.loadCurrentSong();


        //render playlists
        this.render();

        // console.log(this.getCurrentSong())
        //Hiển  thị  trạng thái ban  đầu  của btn  repeat  và  random
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
app.start()