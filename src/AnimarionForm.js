
import React from 'react';
import {
  Form,
  Button,
  Upload,
  Icon,
} from 'antd';

class AnimarionForm extends React.Component {

    state = {
        fileDate: null
    }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  };

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.file){
        let reader = new FileReader();
        reader.onload = function(){
            var text = reader.result;
            console.log(text)
          };
        reader.readAsText( e.file);
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Dragger">
          {getFieldDecorator('dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger multiple={false} name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'validate_other' })(AnimarionForm);
          