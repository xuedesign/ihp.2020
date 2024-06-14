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

// 取得HTML元素，textElement是id為'quote-info'的元素，btnElement是id為'btn-copy'的按鈕元素
const textElement = document.getElementById('quote-info');
const btnElement = document.getElementById('btn-copy');
const lang = document.documentElement.lang; // 獲取HTML的lang屬性

// 為按鈕元素添加點擊事件的監聽器
btnElement.addEventListener('click', () => {
    // 獲取具有class="item_active"的子元素
    const activeItem = textElement.querySelector('.item_active');

    // 如果找到了activeItem，處理其HTML內容
    if (activeItem) {
        // 獲取activeItem的HTML內容
        let htmlContent = activeItem.innerHTML;

        // 移除<strong>標籤及其內容
        htmlContent = htmlContent.replace(/<strong>.*?<\/strong>/gi, '');

        // 移除<div>標籤及其內容
        htmlContent = htmlContent.replace(/<\/?div[^>]*>/gi, '');

        // 移除<span>標籤及其內容
        //htmlContent = htmlContent.replace(/<\/?span[^>]*>/gi, '');

        // 移除<em>標籤及其內容
        htmlContent = htmlContent.replace(/<\/?em[^>]*>/gi, '');

        // 移除<!---->注釋及內容
        //htmlContent = htmlContent.replace(/<!---->/g, '');
        htmlContent = htmlContent.replace(/<!--[\s\S]*?-->/g, '');

        // 將HTML內容中的<br>標籤替換為換行符號
        let text = htmlContent.replace(/<br\s*\/?>/gi, '\n');

        // 去除每行的前後空白字符並消除多餘空行
        text = text.split('\n').map(line => line.trim()).filter(line => line).join('\n');

        // 將處理後的文字寫入剪貼簿
        navigator.clipboard.writeText(text).then(() => {
            // 成功寫入剪貼簿後顯示提示訊息
            switch (lang) {
                case 'zh-Hant-TW':
                    alert('引用書目已複製');
                    break;
                case 'en':
                    alert('Copy Success');
                    break;
                case 'ja':
                    alert('コピーサクセス');
                    break;
                default:
                    alert('Copy Success'); // 默認為英文
                    break;
            }
        }, () => {
            // 寫入剪貼簿失敗後顯示提示訊息
            switch (lang) {
                case 'zh-Hant-TW':
                    alert('引用書目複製失敗');
                    break;
                case 'en':
                    alert('Copy Failure');
                    break;
                case 'ja':
                    alert('コピー失敗');
                    break;
                default:
                    alert('Copy Failure'); // 默認為英文
                    break;
            }
        });
    } else {
        // 如果沒有找到activeItem，顯示提示訊息
        switch (lang) {
            case 'zh-Hant-TW':
                alert('沒有找到活動的引用書目');
                break;
            case 'en':
                alert('No bibliography found');
                break;
            case 'ja':
                alert('参考文献なし');
                break;
            default:
                alert('No bibliography found'); // 默認為英文
                break;
        }
    }
});