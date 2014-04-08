var xhr = new XMLHttpRequest();

xhr.open('GET', '/path/to/image.png', true);

xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {

 window.requestFileSystem(TEMPORARY, 1024 * 1024, function(fs) {

 fs.root.getFile('image.png', {create: true}, function(fileEntry) {

 fileEntry.createWriter(function(writer) {

 writer.onwrite = function(e) {};

 writer.onerror = function(e) {};

 var bb = new BlobBuilder();

 bb.append(xhr.response);

 writer.write(bb.getBlob('image/png'));

 }, onError);

 }, onError);

 }, onError);

};

xhr.send();