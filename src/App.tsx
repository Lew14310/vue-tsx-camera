import {defineComponent, onMounted, reactive} from 'vue'

const App = defineComponent({

    setup() {

        const data = reactive({
            m: ''
        })


        const hasUserMedia = () => {
            // @ts-ignore
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia
                // @ts-ignore
                || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        }

        onMounted(() => {
            if (hasUserMedia()) {
                //alert("浏览器支持")
                navigator.getUserMedia = navigator.getUserMedia
                    // @ts-ignore
                    || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
                    // @ts-ignore
                    || navigator.msGetUserMedia;
                navigator.getUserMedia({
                    video: true,//开启视频
                    audio: false
                    //先关闭音频，因为会有回响，以后两台电脑通信不会有响声
                }, function (stream) {//将视频流交给video
                    var video = document.querySelector("video");
                    //video.src=window.URL.createObjectURL(stream);
                    try {
                        // @ts-ignore
                        video.srcObject = stream;
                    } catch (error) {
                        // @ts-ignore
                        video.src = window.URL.createObjectURL(stream);
                    }
                }, function (err) {
                    alert('您拒绝摄像头权限')
                    console.log("capturing", err)
                });
            } else {
                alert("浏览器暂不支持")
            }
        })


        return () => (
            <div>

                <video autoplay></video>
            </div>
        )
    }

})

export default App