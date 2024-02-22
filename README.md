# PDF Generator Angular Application

This Angular application is designed to generate PDF files from URLs using the PDF.co API. It allows users to input a URL, which is then converted to a PDF file and downloaded.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Features

- Input a URL to generate a PDF file.
- Downloads the generated PDF file.
- Error handling for invalid URLs or failed PDF generation.

## Setup

To run this project locally, follow these steps:

1. Clone this repository to your local machine:


git clone <repository-url>

2. Navigate to the project directory:


cd pdf-generator-angular


3. Install the dependencies:


npm install



4. Update the API key in `pdf-generation.service.ts` with your PDF.co API key.

## Usage

Once the setup is complete, you can run the Angular application using:


ng serve


Visit `http://localhost:4200` in your browser to use the PDF generator application.

## Dependencies

This project relies on the following dependencies:

- Angular: Framework for building the application.
- Angular HttpClient: For making HTTP requests to the PDF.co API.
- RxJS: Reactive Extensions library for handling asynchronous operations.
- PDF.co API: Used for converting URLs to PDF files.

