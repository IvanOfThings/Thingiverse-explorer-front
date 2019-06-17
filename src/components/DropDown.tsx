import React, { useState } from 'react';


const optionsString: string[] = ["Newest", "Popular", "Featured"];

interface DropDownProps {
	onClick: (e: string) => void
}

export const DropDown: React.FC<DropDownProps> = (props: DropDownProps) => {
	const [active, setActive] = useState(false);
	const [selected, setSelected] = useState("Popular");


	return (
		<div className={active ? "dropdown is-active" : "dropdown"} onBlur={() => { window.setTimeout(() => { setActive(false); }, 150) }}>
			<div className="dropdown-trigger">
				<button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => { setActive(!active) }}>
					<span>{selected}</span>
					<span className="icon is-small">
						<i className="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</button>
			</div>
			<div className="dropdown-menu" id="dropdown-menu" role="menu"  >
				<div className="dropdown-content" >
					{
						optionsString.map((optionValue: string) => {
							return (
								<a href="#Newest" key={"dropdown-list-" + optionValue} onClick={() => {
									setSelected(optionValue)
									props.onClick(optionValue.toString().toLowerCase());
									setActive(false);
								}} className="dropdown-item">
									{optionValue}
								</a>
							);
						})
					}
				</div>
			</div>
		</div>
	);

}
