import React from "react";
import "./Loader.scss";

function Loader() {
	return( 
		<div className="overlay">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>Loading...</h1>
		</div>);
}

export default Loader;
