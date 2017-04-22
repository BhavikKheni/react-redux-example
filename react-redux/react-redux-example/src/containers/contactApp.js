import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

import classNames from 'classnames';
import { Button, Form, List, Image, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function validate(values) {
    const errors = {};
    const requiredError = 'Field is Required';
    if (!values.firstName) errors.firstName = requiredError;
    if (!values.lastName) errors.lastName = requiredError;
    if (!values.email) errors.email = requiredError;
    return errors;
}


export class ContactForm extends Component {
    static propTypes = {
        value: PropTypes.any,
        props: PropTypes.any,
        handleSubmit: PropTypes.func,
        formValues: PropTypes.object,
        onSaveData: PropTypes.func,
        testSave: PropTypes.func,
        users: PropTypes.any,
        initialize: PropTypes.func

    };
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            show: false,
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }
    handleOnSave = (event) => {
        event.preventDefault();
        this.submitButton.click();
    }
    onSave = (value) => {
        this.props.onSaveData(value);
    }

    renderInput = ({ input, value, placeholder, readOnly, meta: { touched, error } }) => (
        <div className={classNames('form-group', { 'has-error': touched && error })}>
            <Form.Field>
                <label>{placeholder}</label>
                <input  {...input} id={input.name} value={value} onChange={(e) => this.onChange(e)} style={{ color: '#0088cc', fontSize: 12 }} />
                {touched && error && <span className="help-block">{error}</span>}
            </Form.Field>
        </div>
    );

    render() {
        const { users, handleSubmit } = this.props;
        return (
            <div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Redux Form
                        </Card.Header>

                        <Card.Description>
                            <Form onSubmit={handleSubmit(this.props.testSave || this.onSave)} style={{ marginLeft: 50, marginTop: 10, marginBottom: 30 }}>
                                <div>
                                    <Form.Group widths='equal'>
                                        <Field name="firstName" component={this.renderInput}
                                            type="text" placeholder="First Name" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group widths='equal'>
                                        <Field name="lastName" component={this.renderInput} type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group widths='equal'>
                                        <Field name="email" component={this.renderInput} type="email" placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <div>

                                </div>
                                <div>
                                    <div>
                                        <Button basic color='blue' id="submitButton" type="submit" ref={(c) => { this.submitButton = c; }}>Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card.Description>
                    </Card.Content>
                </Card>
                </div>
            </div>
        );
    }
}
const FORM_NAME = 'simple-form';
ContactForm = reduxForm({
    form: FORM_NAME,
    validate
})(ContactForm)

const mapStateToProps = (state) => ({
    formValues: getFormValues(FORM_NAME)(state),
    users: state.contacts
});
const mapDispatch = (dispatch) => {
    return {
        onSaveData(data) {
            dispatch(action.addContact(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(ContactForm);