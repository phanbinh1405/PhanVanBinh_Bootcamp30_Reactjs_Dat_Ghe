import React, { Component } from "react";
import { connect } from "react-redux";

class MainContent extends Component {
	render() {
		const { danhSachGhe, gheDangChon } = this.props;
		const selectSeat = (seat) => {
				const action = {
					type: 'CHON_GHE',
					payload: seat
				}

				this.props.dispatch(action)
		}

		const renderSeats = () => {
			return danhSachGhe.map((i, index) => {
				let jsxEle = [
					<th scope='row' className='text-warning'>
						{i.hang}
					</th>,
				];

				for (let j = 0; j < i.danhSachGhe.length; j++) {
					let currentSeat = i.danhSachGhe[j]
					let chooseSeat = gheDangChon.findIndex(ghe => ghe.soGhe === currentSeat.soGhe)

					jsxEle.push(
						<td key={currentSeat.soGhe}>
							<button
								className={`seat ${(currentSeat.daDat ? "selected" : '')} ${chooseSeat !== -1 ? 'choose' : ''}`}
								onClick={()=> selectSeat(currentSeat)}
							></button>
						</td>
					);
				}

				return <tr key={index}>{jsxEle}</tr>;
			});
		};
		return (
			<div>
				<h4 className='text-center'>Màn Hình</h4>
				<div className='screen'></div>
				<table className='table mt-5 text-center table-borderless'>
					<thead className='text-warning'>
						<tr>
							<th></th>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
							<th>7</th>
							<th>8</th>
							<th>9</th>
							<th>10</th>
							<th>11</th>
							<th>12</th>
						</tr>
					</thead>
					<tbody>{renderSeats()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		danhSachGhe: state.QuanLyDatGheReducer.danhSachGhe,
		gheDangChon: state.QuanLyDatGheReducer.gheDangChon,
	};
};

export default connect(mapStateToProps)(MainContent);
