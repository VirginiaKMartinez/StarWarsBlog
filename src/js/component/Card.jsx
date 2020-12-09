import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Card.css";
import { Context } from "../store/appContext";

function Card(props) {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState({
		heart: "far fa-heart"
	});
	const handelHeart = () => {
		setSelected({
			heart: "fas fa-heart"
		});
	};
	return (
		<div>
			<div className="card">
				<img
					src="https://dummyimage.com/400x200/616161/fff"
					className="card-img-top"
					alt="placeholder image 400x200"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.labelText1} {props.text1}
					</p>

					<p className="card-text">
						{props.labelText2} {props.text2}
					</p>
					<p className="card-text">
						{props.labelText3} {props.text3}
					</p>
					<div className="downButtons">
						<a href="#" className="btn btn-outline-primary">
							Learn more!
						</a>
						<button type="button" className="btn btn-outline-warning">
							<i
								className="far fa-heart"
								onClick={() => {
									actions.addFavorite(props.name);
									store.favorite.map((favorite, index) => {
										return (
											<div key={index}>
												<ul className="list-group">
													<li className="list-group-item">{favorite}</li>
												</ul>
											</div>
										);
									});
								}}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string
};

export default Card;
