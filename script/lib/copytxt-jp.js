document.getElementById('quote-type').addEventListener('change', function() {
  var selectedValue = this.value;
  var items = ['item_ihp', 'item_apa', 'item_chicago', 'item_mla'];
  
  items.forEach(function(item) {
      if (item === 'item_' + selectedValue.toLowerCase()) {
          document.getElementById(item).classList.add('item_active');
          document.getElementById(item).classList.remove('item_hidden');
      } else {
          document.getElementById(item).classList.add('item_hidden');
          document.getElementById(item).classList.remove('item_active');
      }
  });
});

const textElement = document.getElementById('quote-info');
const btnElement = document.getElementById('btn-copy');

btnElement.addEventListener('click', () => {
    const activeItem = textElement.querySelector('.item_active');
    
    if (activeItem) {
        let htmlContent = activeItem.innerHTML;
        
        htmlContent = htmlContent.replace(/<\/?strong>/gi, '');
        
        let text = htmlContent.replace(/<br\s*\/?>/gi, '\n');
        
        text = text.split('\n').map(line => line.trim()).filter(line => line).join('\n');
        
        navigator.clipboard.writeText(text).then(() => {
            alert('コピーサクセス');
        }, () => {
            alert('コピー失敗');
        });
    } else {
        alert('参考文献なし');
    }
});