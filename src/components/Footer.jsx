import React from 'react';
import './footerstyles.css';

export default function Footer(props){
  return(
    <div className="Footer"
      style={{backgroundColor: props.background, color: props.text}}>
      <style>
        {`
          .Footer a:hover {
            border-bottom: 1px ` + props.hovercolor + ` solid;
            color: ` + props.hovercolor + `!important;
          }
        `}
      </style>
      <p>
        Site and design © 2018 Grailsoft Technical Solutions
        <a href='https://www.linkedin.com/company/grailsoft-technologies-llc/' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-linkedin-square"></span></a>
        <a href='https://github.com/GrailsoftTechnologies' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-github-square"></span></a>
        <a href='https://twitter.com/GrailsoftTech' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></a>
      </p>
    </div>
  );
};

Footer.defaultProps = {
  background: 'black',
  text: 'white',
  hovercolor: 'grey'
}
