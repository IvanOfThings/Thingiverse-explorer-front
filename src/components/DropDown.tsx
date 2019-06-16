import React, { Component, Props } from 'react';


const optionsString: string[] = ["Newest", "Popular", "Featured"];
interface DropDownState {
	active: boolean,
	selected: string
}

interface DropDownProps {
	onClick: (e: string) => void
}
export class DropDown extends Component<DropDownProps, DropDownState> {

	state: DropDownState = { active: false, selected: optionsString[0] };
	constructor(props: DropDownProps) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onClickHandler2 = this.onClickHandler2.bind(this);
	}

	onClickHandler(): void {
		this.state.active ? this.setState({ active: false }) : this.setState({ active: true });
	}

	onClickHandler2(newKind: string): void {
		this.state.active ? this.setState({ active: false, selected: newKind }) : this.setState({ active: true, selected: newKind });
		this.props.onClick(newKind.toString().toLowerCase());
	}

	render() {
		return (
			<div className={this.state.active ? "dropdown is-active" : "dropdown"}>
				<div className="dropdown-trigger">
					<button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.onClickHandler}>
						<span>{this.state.selected}</span>
						<span className="icon is-small">
							<i className="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</div>
				<div className="dropdown-menu" id="dropdown-menu" role="menu">
					<div className="dropdown-content">
						{
							optionsString.map((optionValue: string) => {
								return (
									<a href="#Newest" key={"dropdown-list-" + optionValue} onClick={() => { this.onClickHandler2(optionValue) }} className="dropdown-item">
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
}
