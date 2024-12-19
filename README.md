# key-sequence-listener-npm-package
This is util that listens to key presses and invokes an ation when the correct one was pressed

## Usage
Call this function on the page you what to listen to key presses
```javascript
keySeqListener(str, timeout, action)
```
`str` - The key sequence to be pressed
`timeout` - Timeout in milliseconds
`action` - Function to call `() => void`
