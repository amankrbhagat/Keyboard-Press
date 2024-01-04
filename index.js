let keyboardPress = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    keyboardPress.innerHTML = `
    <div class = "press" >
        <table>
            <tr>
                <th>Key</th>
                <th>keyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${event.key === " " ? "Space" : event.key}</th>
                <th>${event.keyCode}</th>
                <th>${event.code}</th>
            </tr>
        </table>
    </div>    
    `
})