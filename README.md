# express-upload-server

```
$ npm install
$ npm start
```

Access http://localhost:3000

Shingle File Upload - POST:/upload

Multiple File Upload - POST:/upload/multiple

Client App Sample

```
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>Uploader</title>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
</head>
<body>
    <!-- 単一ファイルアップロードフォーム -->
    <div>
        <input type="file" id="upload">
        <input type="button" id="uploadButton" value="送信">
    </div>
    <!-- 複数ファイルアップロードフォーム -->
    <div>
        <input type="file" id="multipleUpload" multiple>
        <input type="button" id="multipleUploadButton" value="送信">
    </div>
<script>
$(function(){
    // 単一ファイルアップロード
    $('#uploadButton').click(function() {
        const files = $('#upload')[0].files;
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('hoge', 123);

        $.ajax({
            url: 'http://localhost:3000/upload',
            method: 'post',
            data: formData,
            processData: false,
            contentType: false
        }).done(function(res){
            console.log(res);
        }).fail(function(err) {
            console.log(err);
        })
    })

    // 複数ファイルアップロード
    $('#multipleUploadButton').click(function() {
        const files = $('#multipleUpload')[0].files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        formData.append('hoge', 123);

        $.ajax({
            url: 'http://localhost:3000/upload/multiple',
            method: 'post',
            data: formData,
            processData: false,
            contentType: false
        }).done(function(res){
            console.log(res);
        }).fail(function(err) {
            console.log(err);
        })
    })
});
</script>
</body>
</html>
```