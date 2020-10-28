function convertURL() {
    const urlBox = document.getElementById('urlbox');
    let input = urlBox.value;
    if (input === '') {
        input = urlBox.placeholder
    }

    // check for valid slack url input
    const regex = /hooks.slack.com\/workflows/g;
    const valid = input.match(regex)
    console.log(valid)

    if (!valid) {
        console.error('URL provided was not a valid hook.slack.com/workflows url')
        return
    }

    document.querySelector('#url-box-flip').classList.toggle('flip')
    // document.querySelector('#urlbox').classList.toggle('hide')
    // document.querySelector('#urlbox-pancake-url').classList.toggle('hide')

    const url = new URL(input)
    // change URL hostname to servers host
    url.hostname = window.location.host

    // update second input box with new url
    document.getElementById('urlbox-pancake-url').value = url.href
    


}