import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Form } from 'semantic-ui-react'
import SurveyField from './SurveyField'

class SurveyForm extends React.Component {
  render() {
    return (
      <Form>
        <Field type="text" name="surveyTitle" component="input" />
        <Form.Button>Submit</Form.Button>
        <SurveyField />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)