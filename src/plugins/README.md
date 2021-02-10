# Plugins
## feather-icons
- [feathericons/feather: Simply beautiful open source icons](https://github.com/feathericons/feather#usage)
    1. 引入 js
       ```javascript
       // main.js
       import './plugins/feather-icons'
       ```
       ```javascript
       // feather-icons.js
       const feather = require('feather-icons')
       if (process.browser) {
       window.feather = feather
       }
       ```
       
      2. 写标签
          
          ```html
          <i data-feather="circle"></i>
          ```
          
          
          
    3. call 函数 (用在 `mounted` 周期)
    
          ```vue
          mounted() {
            feather.replace()
          }
          ```

