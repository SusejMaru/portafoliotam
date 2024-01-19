document.getElementById('editor').addEventListener('input', function() {
    var markdown = this.value;
    var html = marked(markdown);
    document.getElementById('preview').innerHTML = html;
  });
  
  window.onload = function() {
    var defaultMarkdown = document.getElementById('editor').value;
    var defaultHtml = marked(defaultMarkdown);
    document.getElementById('preview').innerHTML = defaultHtml;
  };
  