import React, { Component } from 'react';
import './LandingPage.css'

export default class LandingPage extends Component { 
    render() {
      return (
        <div>
            <p>
              Drivia is a quiz game where you answer in your own handwriting.
              It utilizes the <a href="https://github.com/tesseract-ocr/">Tesseract OCR</a> to detect your handwriting and convert it to digital text.
            </p> 
            <p>    
              <span className="bold">WARNING:</span> Drivia is <span className="bold">hard.</span> You must write as legibly as possible if you even hope to score a point. Character spacing, line spacing, and capitlization don't matter.
            </p>
        </div>
      )
    }
  }