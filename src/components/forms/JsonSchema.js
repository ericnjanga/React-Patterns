import React from 'react';
import Form from 'react-jsonschema-form';


const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Eric' },
    lastName: { type: 'string', default: 'Njanga' },
  },
};


class JsonSchema extends React.Component {

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit({ formData }) {
    console.log('-formData=', formData);
  }


  render() {

    return (
      <Form
        schema={schema}
        onSubmit={this.handleSubmit}
      />
    );

  }

}

export default JsonSchema;
