# EXPRESS UNZIP

This Express-based API allows for decompressing zip files. It provides a simple and convenient interface to extract the
contents of compressed files in zip format.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js (version 16.17.0)
- npm (version 16.17.0)
- Express

## Installation

1. Clone this repository to your local machine:
   ``` git clone https://github.com/mouafus/express-unzip.git ```

2. Install the dependencies:
   ``` npm install ```

3. Start the server:
   ``` npm start ```

4. The API will be available at http://localhost:8000

## Usage

The API has a single endpoint: ``` /unzip ```
It accepts a POST request with a zip file in the body. The response will be a JSON object with the following structure:

```
{
    "success": true,
    "message": "File successfully decompressed",
}
```

For testing purposes, there are a Html file in the root directory of the project. You can use it to test the API.
The file is named ``` test.html ``` and it contains a form that allows you to upload a zip file and send it to the API.
The unzipped files will be available in the ``` extracted ``` directory.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

Steven DONGMO (mouafus)

## Contributions

Contributions are welcome! If you'd like to improve this API, please feel free to submit a pull request.

Make sure to customize the sections of the README (such as prerequisites, file paths, code examples) according to your
own project. You can also add additional sections if needed, such as advanced usage examples, configuration options,
etc.

I hope this helps you create a clear and concise README for your Zip File Decompression API. Good luck with your
project!