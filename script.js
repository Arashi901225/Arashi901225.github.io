const copyButton = document.getElementById('copy-discord');
const copyStatus = document.getElementById('copy-status');
let resetTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(resetTimer);
  try {
    await navigator.clipboard.writeText('arashi1225');
    copyButton.textContent = '已複製';
    copyStatus.textContent = '已複製 arashi1225';
  } catch {
    copyStatus.textContent = '請選取並複製：arashi1225';
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('discord-handle'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  resetTimer = setTimeout(() => {
    copyButton.textContent = '複製';
    copyStatus.textContent = '';
  }, 5000);
});
document.getElementById('year').textContent = new Date().getFullYear();
