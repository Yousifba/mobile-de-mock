import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            make: '',
            model: '',
            year: '',
            description: '',
            price: '',
            email: '',
            imageurl: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { make, model, year, description, price, email, imageurl} = this.state; 

        return (
            <div className='small-container'>
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label for="make" className='form-control'>Make</label>
                        <select className='form-control' name='make' id='id' value={make} onChange={this.handleChange} required>
                            <option value="" disabled selected>Select Your Make</option>
                            <option value="bmw">BMW</option>
                            <option value="peugeot">Peugeot</option>
                            <option value="fiat">Fiat</option>
                            <option value="kia">Kia</option>
                            <option value="toyota">Toyota</option>
                            <option value="chevrolet">Chevrolet</option>
                        </select>
                    </div>
                    <div className='form-row'>
                        
                        <div className='form-group col-md-4'>
                            <label for="model" className='form-control'>Model</label>
                            <input className='form-contorl' type="text" name="model" id="model" svalue={model} onChange={this.handleChange} minLength={2} maxLength={32} required/>
                        </div>
                        <div className='form-group col-md-4'>
                            <label className='form-control' for="year">Year</label>
                            <input type="number" name="year" id="year" value={year} onChange={this.handleChange} required/>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='form-control' for="price">Price</label>
                            <input type="number" name="price" id="price" value={price} onChange={this.handleChange} required/>
                        </div>
                    </div>
                    
                    <div className='form-row'>
                        <div className='form-group col-md-4'>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={this.handleChange} required/>
                        </div>
                        <div className='form-group col-md-8'>
                            <label for="imageurl">Image URL</label>
                            <input type="url" name="imageurl" id="imageurl" value={imageurl} onChange={this.handleChange} placeholder='(Optional)'/>
                        </div>
                    </div>
                    

                    
                        
                    
                    

                    <label for="description">Description</label>
                    <input type="text" name="description" 
                        id="description" value={description} onChange={this.handleChange} required/>

                    

                    

                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;