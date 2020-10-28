function convertURL() {
    document.querySelector('#url-box-flip').classList.toggle('flip')
    // document.querySelector('#urlbox').classList.toggle('hide')
    // document.querySelector('#urlbox-pancake-url').classList.toggle('hide')

    const input = document.getElementById('urlbox').value;
    if (input === '') {
        console.log('no input')
    }

    // check for valid slack url input

    // convert URL
    console.log(input)
    console.log(window.location.href)
}