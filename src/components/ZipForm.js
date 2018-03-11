import React from "react";
import PropTypes from 'prop-types';

class ZipForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: ''
        };

        // this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    }

    render() {
        return (
            <div className="zip-form">
                {/* Option form method to demonstrate COMPONENTDIDMOUNT()*/}
                <form>
                    <label htmlFor="zipcode">Zip Code</label>
                    <select onChange={this.submitZipCode}>
                    <option value="">Select a zip</option>
                    {this.props.zips.map(zip =>
                        <option key={zip} value={zip}>{zip}</option>
                    )}
                    </select>
                </form>

                {/* ~~~~~~~Search Bar Method~~~~~ */}
                {/* <form onSubmit = { this.submitZipCode }>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                    className="form-control"
                    type="input"
                    name="zipcode"
                    value={this.state.zipcode}
                    onInput={this.inputUpdated} />
                <button type="submit" className='btn btn-success'>Get the forecast!!</button>
                </form> */}
            </div>  
        );
    }

    // ~~~~Search bar method~~~~
    // inputUpdated(e) {
    //     const { value } = e.target;

    //     this.setState({ zipcode: value });
    // }

    // submitZipCode(e) {
    //     e.preventDefault();

    //     const { zipcode } = this.state;
    //     const { onSubmit } = this.props;

    //     onSubmit(zipcode);

    //     this.setState({ zipcode: '' });
    // }



    // Option method
    submitZipCode(e) {
        const { onSubmit } = this.props;
      
        onSubmit(e.target.value);
    }
}

ZipForm.defaultProps = {
    onSubmit: () => {}
};

ZipForm.propTypes = {
    zips: PropTypes.arrayOf(PropTypes.number).isRequired,
    onSubmit: PropTypes.func
};
  

export default ZipForm;