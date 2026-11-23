// Copy BibTeX
document.getElementById('copyBtn').addEventListener('click', function () {
  var btn = this, text = document.getElementById('bibtex').textContent;
  navigator.clipboard.writeText(text).then(function () {
    btn.classList.add('copied'); btn.innerHTML = '<i class="fas fa-check"></i> Copied';
    setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = '<i class="far fa-copy"></i> Copy'; }, 1800);
  });
});
