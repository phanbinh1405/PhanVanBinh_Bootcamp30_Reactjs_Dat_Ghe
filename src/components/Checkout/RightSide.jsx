import React, { Component } from "react";
import { connect } from "react-redux";

class RightSide extends Component {
	render() {
		const { gheDangChon } = this.props;

    const handleDelete = (ghe) => {
      const action = {
        type: 'XOA',
        payload: ghe
      }

      this.props.dispatch(action)
    }

		const renderGheDangChon = () => {
			return gheDangChon.map((ghe) => {
				return (
					<tr key={ghe.soGhe}>
						<td>{ghe.soGhe}</td>
						<td>{ghe.gia.toLocaleString()}</td>
						<td>
							<button className='btn btn-danger' onClick={() => handleDelete(ghe)}>Huỷ</button>
						</td>
					</tr>
				);
			});
		};
		return (
			<div>
				<div>
					<p className='d-flex align-items-center'>
						{" "}
						<span className='me-3 box box-selected'></span> Ghế đã đặt
					</p>
					<p className='d-flex align-items-center'>
						{" "}
						<span className='me-3 box box-current'></span> Ghế đang chọn
					</p>
					<p className='d-flex align-items-center'>
						{" "}
						<span className='me-3 box box-empty'></span> Ghế trống
					</p>
				</div>

				<table className='table table-bordered border-white text-white mt-5 text-center'>
					<thead>
						<tr>
							<th>Số ghế</th>
							<th>Giá</th>
							<th>Huỷ</th>
						</tr>
					</thead>
					<tbody>{renderGheDangChon()}</tbody>
					<tfoot>
						<tr>
							<td>Thành tiền</td>
							<td colSpan={2}>{gheDangChon.reduce((total, item) => total += item.gia, 0).toLocaleString()}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		gheDangChon: state.QuanLyDatGheReducer.gheDangChon,
	};
};

export default connect(mapStateToProps)(RightSide);
