// ==UserScript==
// @name         PTer mediainfo thingy
// @namespace    https://pterclub.com/
// @version      1.2
// @description  Drag & drop files to generate mediainfo
// @author       BbLaCk
// @Credits      Eva
// @match        https://pterclub.com/upload.php*
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// @require      https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/CDN%2Fmediainfo.js
// @icon         https://pterclub.com/favicon.ico
// @run-at       document-end
// ==/UserScript==

$("input[name='douban']").parent().parent().after("<tr><td>Media Info</td><td><input type='file' id='userscript_mediainfo_input'></td></tr>");
$('#userscript_mediainfo_input').after("<p id='userscript_mediainfo_status'>⬆请将媒体文件拖入上述文件筐⬆</p>");
const helper = document.getElementById('userscript_mediainfo_status');
const fileinput = document.getElementById('userscript_mediainfo_input');
const output = document.getElementById('descr');

const onChangeFile = (mediainfo) => {
  const file = fileinput.files[0];
  if (file) {
    helper.innerText = '正在解析…';

    const getSize = () => file.size;
    const readChunk = (chunkSize, offset) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target.error) {
            reject(event.target.error)
          }
          resolve(new Uint8Array(event.target.result))
        };
        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
      });

    mediainfo
      .analyzeData(getSize, readChunk)
      .then((result) => {
        helper.innerText = '解析成功';
        output.value = output.value + "\n[hide=mediainfo]" + result.replace(/^Format\s{7}(\s*)/m, 'Complete name$1: ' + file.name + '\nFormat       $1') + "[/hide]\n"
      })
      .catch((error) => {
        helper.innerText = `解析时发送错误:\n${error.stack}`
      })
  }
};

MediaInfo({ format: 'text' }, (mediainfo) => {
  fileinput.addEventListener('change', () => onChangeFile(mediainfo))
});



