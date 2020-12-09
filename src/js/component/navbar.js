import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import SWlogo from "../../img/SWlogo.png";
import { Context } from "../store/appContext";

//LIBRERIA BOOTSTRAP FOR REACT

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Badge } from "reactstrap";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img src={SWlogo} width="30" a height="30" alt="star wars logo" id="logo" />
			</a>
			<Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
				<DropdownToggle caret className="dropdownButton">
					Favorites <Badge color="light">{store.favorite.length}</Badge>
				</DropdownToggle>
				<DropdownMenu right>
					{store.favorite.length > 0 ? (
						store.favorite.map((favorite, index) => {
							return (
								<DropdownItem key={index}>
									{favorite}
									<i
										id="delete"
										className="far fa-trash-alt pointer"
										onClick={() => {
											actions.deleteFavorite({ index });
										}}
									/>
								</DropdownItem>
							);
						})
					) : (
						<DropdownItem>
							<p>Emty</p>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
export default Navbar;
