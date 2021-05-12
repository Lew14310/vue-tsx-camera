import {defineComponent, onMounted, reactive} from 'vue'

const App = defineComponent({

    setup() {



        onMounted(() => {
            // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
            if (navigator.mediaDevices === undefined) {
                // @ts-ignore
                navigator.mediaDevices = {};
            }

// 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
// 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
            if (navigator.mediaDevices.getUserMedia === undefined) {
                navigator.mediaDevices.getUserMedia = function (constraints) {

                    // 首先，如果有getUserMedia的话，就获得它
                    // @ts-ignore
                    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                    // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                    if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    }

                    // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                    return new Promise(function (resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                }
            }

            navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}})
                .then(function (stream) {
                    var video = document.querySelector('video');
                    // 旧的浏览器可能没有srcObject
                    // @ts-ignore
                    if ("srcObject" in video) {
                        video.srcObject = stream;
                    } else {

                        // 防止在新的浏览器里使用它，应为它已经不再支持了
                        // @ts-ignore
                        video.src = window.URL.createObjectURL(stream);
                    }
                    // @ts-ignore
                    video.onloadedmetadata = function (e) {
                        // @ts-ignore
                        video.play();
                    };
                })
                .catch(function (err) {
                    console.log(err.name + ": " + err.message);
                });

        })


        return () => (
            <div>

                <video autoplay></video>
            </div>
        )
    }

})

export default App