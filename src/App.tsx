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
                /*
                , function (stream) {//将视频流交给video
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
                                // @ts-ignore
                                if (navigator.getUserMedia) { // Standard
                                    alert('getUserMedia')
                                    // @ts-ignore
                                } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed引擎
                                    alert('webkitGetUserMedia')
                                }
                                // @ts-ignore
                                else if (navigator.mozGetUserMedia) { // Firefox-prefixed
                                    alert('mozGetUserMedia')
                                    // @ts-ignore
                                }else if (navigator.msGetUserMedia){
                                    alert('msGetUserMedia')
                                }
                            }
                * */
                const mediaDevices: MediaDevices = navigator.mediaDevices;

                mediaDevices.getUserMedia({video: {facingMode: 'environment'}}).then((mediaStream)=>{
                    var video = document.querySelector("video");

                    try {
                        // @ts-ignore
                        video.src = window.URL.createObjectURL(mediaStream);

                    } catch (error) {
                        // @ts-ignore
                        video.src = window.URL.createObjectURL(mediaStream);
                    }
                    // @ts-ignore
                    video.play();
                })
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