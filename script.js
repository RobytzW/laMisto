const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', e => {
    e.preventDefault();
    btn.innerText = "downloading file...";
    fetchFile(inp.value);
});

function fetchFile(url) {
    //fetching file and returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        //passing tempUrl as href value of <a> tag
        aTag.href = tempUrl;
        aTag.download = "filename";
        //adding <a> tag inside body
        document.body.appendChild(aTag);
        //clicking <a> tag so the file download
        aTag.click();
        //removing <a> tag once file downloaded
        aTag.remove();
        //removing temURL from the document
        URL.revokeObjectURL(tempUrl);
        btn.innerText = "download file";
    }).catch(() => {
        alert('adblockeru ba')
    });
}