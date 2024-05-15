import { util } from './util.js';

export const progress = (() => {

    const info = document.getElementById('progress-info');
    const bar = document.getElementById('progress-bar');

    const total = assets.length;
    let loaded = 0;

    const progress = () => {
        loaded += 1;

        bar.style.width = Math.min((loaded / total) * 100, 100).toString() + "%";
        info.innerText = `Thư đang dến đợi tí nhé 💕 (${loaded}/${total}) [${parseInt((loaded / total) * 100).toFixed(0)}%]`;

        if (loaded == total) {
            util.show();
        }
    };

    info.style.display = 'block';

})();