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