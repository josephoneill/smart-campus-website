import React from 'react';

import './InfoItem.css';
import info_item_default_image from '../../../assets/website-logo.svg';

function InfoItem(props) {
  return (
    <div>
		  <img src={props.image} className="info-item-logo"/>
			<div className="info-item-logo-details">
				<h2>{props.title}</h2>
				<p>
					{props.desc}
				</p>
			</div>
	</div>
  );
}

InfoItem.defaultProps = {
	title: "Title 1",
	image: info_item_default_image,
	desc: "Wrapped text explaining title 1 in detail, long enough to wrap multiple lines. Some more random text to fill it out and make it look nice."     
}

export default InfoItem;
