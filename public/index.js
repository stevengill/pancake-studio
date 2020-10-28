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
        urlBox.classList.add('error');
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

function goBack() {
    document.querySelector('#url-box-flip').classList.toggle('flip')
}

function copy() {
    const input = document.getElementById('urlbox-pancake-url');
    const inputValue = input.value
    navigator.clipboard.writeText(inputValue).then(function() {
        // clipboard successfully set
        console.log('url copied to clipboard')
        input.classList.add('success');
        setTimeout(function() {
            input.classList.remove('success');
        }, 100);
      }, function() {
        // clipboard write failed
        console.log('url failed to copy')
        input.classList.add('error');
        setTimeout(function() {
            input.classList.remove('error');
        }, 100);
      });
}

document.addEventListener("DOMContentLoaded", function() {
    const urlBox = document.getElementById('urlbox');

    urlBox.addEventListener('input', function(event) {
        urlBox.classList.remove('error');
    });

    // On enter, convert!
    urlBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            return convertURL();
        }
    });
});