const viewsCounter = document.querySelector('#views-displayer');
async function updateViews() {
    try {
        const response = await fetch('https://gtvu5tkmqsdnpqxkeofnwztuim0gtyve.lambda-url.ap-south-1.on.aws/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        viewsCounter.textContent = `This page has been viewed ${data} times. The count value is stored in a DynamoDB table amd fetched using a Lambda function.`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        viewsCounter.textContent = 'Unable to fetch view count at this time.';
    }
}

updateViews();