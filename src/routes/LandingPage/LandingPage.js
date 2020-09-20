import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component { 
    render() {
      //const { error } = this.state
      return (
        <div>
            <p>Drivia is a quiz game where you answer in your own handwriting.
                It utilizes an OCR API to detect and convert your handwriting in
                to digital text.
            </p>
        </div>
      )
    }
  }